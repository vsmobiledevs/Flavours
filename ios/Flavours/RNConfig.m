//
//  RNConfig.m
//  Flavours
//
//  Created by Apple on 01/12/2021.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if DEV
  NSString *env = @"dev";
#elif QA
  NSString *env = @"qa";
#else
  NSString *env = @"prod";
#endif
 return @{ @"env": env };
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}
@end
