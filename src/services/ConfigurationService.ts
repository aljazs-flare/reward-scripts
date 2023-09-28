import { Factory, Inject, Singleton } from 'typescript-ioc';
import { readJSON } from '../utils/config-utils';
import { INetworkConfigJson } from '../utils/interfaces';
import { logException } from '../logger/logger';
import { config } from 'dotenv';

@Singleton
@Factory(() => new ConfigurationService())
export class ConfigurationService {

   network: string;
   networkRPC: string;
   maxBlocksForEventReads: number;
   maxRequestsPerSecond: number | string;
   firstRewardEpoch: number;
   requiredFtsoPerformance: number;
   boostingFactor: number;
   votePowerCapBIPS: number;
   numUnrewardedEpochs: number;
   uptimeVotigPeriodLengthSeconds: number;
   uptimeVotingThreshold: number;
   minForBEBGwei: string;
   defaultFeePPM: number;
   rewardAmountEpochWei: string;
   apiPath: string;

   constructor() {
      if (process.env.CONFIG_FILE) {
         let configFile: INetworkConfigJson;
         try{
            configFile = readJSON<INetworkConfigJson>(process.env.CONFIG_FILE);
         }
         catch (error){
            logException(error, `ConfigFile doesn't exist`);
            configFile = {} as INetworkConfigJson;
         }

         this.network = configFile.NETWORK ? configFile.NETWORK : "flare";
         this.networkRPC = configFile.RPC ? configFile.RPC : "https://flare-api.flare.network/ext/C/rpc";
         this.maxBlocksForEventReads = configFile.MAX_BLOCKS_FOR_EVENT_READS ? configFile.MAX_BLOCKS_FOR_EVENT_READS : 30;
         this.maxRequestsPerSecond = configFile.MAX_REQUESTS_PER_SECOND ? configFile.MAX_REQUESTS_PER_SECOND : 3;
         this.firstRewardEpoch = configFile.FIRST_REWARD_EPOCH ? configFile.FIRST_REWARD_EPOCH : 50;
         this.requiredFtsoPerformance = configFile.REQUIRED_FTSO_PERFORMANCE ? configFile.REQUIRED_FTSO_PERFORMANCE : 0;
         this.boostingFactor = configFile.BOOSTING_FACTOR ? configFile.BOOSTING_FACTOR : 5;
         this.votePowerCapBIPS = configFile.VOTE_POWER_CAP_BIPS ? configFile.VOTE_POWER_CAP_BIPS : 500;
         this.numUnrewardedEpochs = configFile.NUM_UNREWARDED_EPOCHS ? configFile.NUM_UNREWARDED_EPOCHS : 1;
         this.uptimeVotigPeriodLengthSeconds = configFile.UPTIME_VOTING_PERIOD_LENGTH_SECONDS ? configFile.UPTIME_VOTING_PERIOD_LENGTH_SECONDS : 600;
         this.uptimeVotingThreshold = configFile.UPTIME_VOTING_THRESHOLD ? configFile.UPTIME_VOTING_THRESHOLD : undefined;
         this.minForBEBGwei = configFile.MIN_FOR_BEB_GWEI ? configFile.MIN_FOR_BEB_GWEI : "1000000000000000";
         this.defaultFeePPM = configFile.DEFAULT_FEE_PPM ? configFile.DEFAULT_FEE_PPM : 200000;
         this.rewardAmountEpochWei = configFile.REWARD_AMOUNT_EPOCH_WEI ? configFile.REWARD_AMOUNT_EPOCH_WEI : undefined;
         this.apiPath = configFile.API_PATH ? configFile.API_PATH : "https://flare-indexer.flare.rocks";
      }
   }

}
