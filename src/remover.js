import {promises as fs} from 'node:fs';

export default async function removeC8({projectRoot}) {
  await fs.rm(`${projectRoot}/.c8rc`, {force: true});

  return {dependencies: {javascript: {remove: ['c8']}}};
}
