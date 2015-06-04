//
//  StepperManager.m
//  CodePathRN
//
//  Created by Jehan Tremback on 6/2/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//
@import UIKit;

#import "StepperManager.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"
#import "RCTBridge.h"

@implementation StepperManager

  RCT_EXPORT_MODULE()
  RCT_EXPORT_VIEW_PROPERTY(continuous, BOOL)
  RCT_EXPORT_VIEW_PROPERTY(value, float)

  - (UIView *)view
  {
    UIStepper *stepper = [[UIStepper alloc] init];
    [stepper addTarget:self action:@selector(stepperValueChanged:) forControlEvents:UIControlEventValueChanged];
    return stepper;
  }

  - (void)stepperValueChanged:(UIStepper *)sender
  {
    NSDictionary *event = @{
      @"target": sender.reactTag,
      @"value": @(sender.value),
      @"continuous": @YES,
    };

    [self.bridge.eventDispatcher sendInputEventWithName:@"topChange" body:event];
  }

@end
