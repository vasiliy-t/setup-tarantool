import path from 'path';
import * as tc from '@actions/tool-cache';
import * as core from '@actions/core';

export async function run() {
  try {
    const downloadPath = await tc.downloadTool("https://github.com/vasiliy-t/tarantool-versions/releases/download/2.7.0/tarantool.tar.gz", undefined, undefined);
    core.info('Extracting Tarantool...');

    let extPath = await tc.extractTar(downloadPath);
    core.info(`Successfully extracted go to ${extPath}`);

    core.addPath(path.join(extPath, 'bin'));
  } catch (error) {
    core.setFailed(error.message);
  }
}
