import { s3ConnectionManager } from 'src/automation/settings';

class BuildReport {
  bucketName: string;

  directoryName: string;

  beforeRunList = [];

  afterRunList = [];

  async beforeRun(details: any) {
    this.beforeRunList.push(details.browser.name);
  }

  async afterRun(details: any) {
    details.runs.forEach(async (registers) => {
      if (registers.video !== null) {
        // console.log(registers.videos);
        // await s3ConnectionManager.uploadFilesFromDirectory({
        //   localDirectory: relativePath,
        //   bucketName: this.bucketName,
        //   remoteDirectory: this.directoryName,
        // });
      }
    });
    this.afterRunList.push(details.totalFailed);
  }

  async beforeStep(details: any) {
    return details;
  }

  async afterStep(details: any) {
    return details;
  }

  async setBucketAndDirectory(bucketName: string, directory: string) {
    this.bucketName = bucketName;
    this.directoryName = directory;
    const deleteBucket = await s3ConnectionManager.deleteItem(
      bucketName,
      directory,
    );

    if (deleteBucket) {
      await s3ConnectionManager.createDirectory(bucketName, directory);
    }
  }
}

export default new BuildReport();
