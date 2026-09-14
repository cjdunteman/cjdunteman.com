import { visit } from 'unist-util-visit';

export function remarkObsidianLinks(options = {}) {
    const baseUrl = options.baseUrl || '/';

    return (tree) => {
        visit(tree, 'text', (node, index, parent) => {
            // Match [[wiki-link]] patterns in raw text nodes
            const regex = /\[\[([^\[\]]+)\]\]/g;
            if (!regex.test(node.value)) return;

            const children = [];
            let lastIdx = 0;
            let match;

            // Reset regex instance index
            regex.lastIndex = 0;

            while ((match = regex.exec(node.value)) !== null) {
                // Push any preceding text
                if (match.index > lastIdx) {
                    children.push({
                        type: 'text',
                        value: node.value.slice(lastIdx, match.index)
                    });
                }

                let fullLink = match[1].trim();
                let displayText = fullLink;

                // Handle Aliases: [[Page|Display text]]
                if (fullLink.includes('|')) {
                    const parts = fullLink.split('|');
                    fullLink = parts[0].trim();
                    displayText = parts[1].trim();
                }

                // Handle Headers: [[Page#Section]]
                if (fullLink.includes('#')) {
                    fullLink = fullLink.split('#')[0].trim();
                }

                // Format URL path (lowercase, spaces to hyphens)
                const slug = fullLink.toLowerCase().replace(/\s+/g, '-');

                // Safely combine the root path and slug without double slashes
                const url = baseUrl === '/' ? `/${slug}` : `${baseUrl.replace(/\/$/, '')}/${slug}`;

                // Push as a standard Markdown/AST link node
                children.push({
                    type: 'link',
                    url: url,
                    children: [{ type: 'text', value: displayText }]
                });

                lastIdx = regex.lastIndex;
            }

            // Push any remaining text after the last link
            if (lastIdx < node.value.length) {
                children.push({
                    type: 'text',
                    value: node.value.slice(lastIdx)
                });
            }

            // Replace the text node with our new split/parsed nodes in parent
            parent.children.splice(index, 1, ...children);
        });
    };
}
