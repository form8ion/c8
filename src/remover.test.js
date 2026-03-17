import {promises as fs} from 'node:fs';

import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';

import removeC8 from './remover.js';

vi.mock('node:fs');

describe('c8 remover', () => {
  it('should remove c8 relevant details from the project', async () => {
    const projectRoot = any.string();

    expect(await removeC8({projectRoot})).toEqual({dependencies: {javascript: {remove: ['c8']}}});
    expect(fs.rm).toHaveBeenCalledWith(`${projectRoot}/.c8rc.json`, {force: true});
  });
});
