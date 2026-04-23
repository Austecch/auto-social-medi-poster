import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AgentRun {
  @Command({
    command: 'run:agent',
    describe: 'Run the agent',
  })
  async agentRun() {
    console.log('Agent is running - use the UI to interact with AI features');
  }
}
