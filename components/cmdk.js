import React from "react";
import { Command } from "cmdk";

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="fixed flex max-w-xl bg-gray">
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="flex max-w-xl mx-auto flex-col border-2 rounded outline-none"
      >
        <Command.Input className="px-2 outline-none" />
        <hr></hr>
        <Command.List className="px-2">
          <Command.Empty>No results found.</Command.Empty>

          {items.map(({ label }) => {
            return (
              <Command.Item key={label} value={label}>
                {/* {icon} */}
                {label}
                <div>
                  {/* {shortcut.map((key) => {
                    return <kbd key={key}>{key}</kbd>;
                  })} */}
                </div>
              </Command.Item>
            );
          })}
        </Command.List>
      </Command.Dialog>
    </div>
  );
};

const items = [
  {
    label: "Email",
  },
];

export default CommandMenu;
