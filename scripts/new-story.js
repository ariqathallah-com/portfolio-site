#!/usr/bin/env node
/**
 * Usage: npm run new-story "My Story Title"
 * Creates content/stories/my-story-title.md with front matter pre-filled,
 * so adding a story is one command instead of hand-writing a file.
 */
const fs = require('fs');
const path = require('path');

const title = process.argv.slice(2).join(' ').trim();

if (!title) {
  console.error('Usage: npm run new-story "My Story Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

const date = new Date().toISOString().slice(0, 10);
const dir = path.join(process.cwd(), 'content', 'stories');
const filePath = path.join(dir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`A story already exists at ${filePath}`);
  process.exit(1);
}

const template = `---
title: "${title}"
date: "${date}"
excerpt: "One or two sentences that summarize this story."
tags: ["journey"]
---

Write your story here in plain Markdown.
`;

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(filePath, template);
console.log(`Created ${filePath}`);
console.log('Edit it, then: git add, commit, and push to publish.');
