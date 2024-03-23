class EnvironmentFromTasks {
  defineEnvironment: string;

  getEnvironment() {
    return this.defineEnvironment;
  }

  setEnvironment(setEnv: any) {
    this.defineEnvironment = setEnv;
    return this.defineEnvironment;
  }
}

export default new EnvironmentFromTasks();
