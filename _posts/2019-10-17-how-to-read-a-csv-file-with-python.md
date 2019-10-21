---
title: How to Read a CSV File with Python
tags: [Python] [Data Science]
style: fill
color: danger
description: Learn to read data from a CSV File.
external_url: 
---

Python is currently the go to language for Data Science, and for good reason. This article goes through how to start reading CSV files and demonstrates a few useful snippets.

First, we need to be able to access the file. 

```python
import csv

fifa_file = open('Fifa19.csv', encoding='utf-8')
file_reader = csv.reader(fifa_file)
player_data = list(file_reader)
fifa_file.close()
header = player_data[0]
player_data = player_data[1:]
```