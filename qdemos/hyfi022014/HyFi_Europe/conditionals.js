
 					// Scenerio 1 WiFi 2.4GHz
					//   Living Room   //    Den = Studio   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power == "on" && tv1Power == "off" &&  tv3Power == "off" && tv5Power == "off" && tv4Power == "off") {
                                               
						
						 var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S1");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
	
						heatMapContainer.src='images/individual_floor_maps/Scenario1_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario1_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario1_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
						TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						scenario = "wifi2pt4_1";
						
						TweenMax.to(obj, .5, {value:condition1a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition1a);
										
						
						}});
						
						
					} else {
						// Scenerio 2 WiFi 2.4GHz
						//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(  tv2Power== "off" && tv1Power== "on" && tv3Power== "off" && tv5Power== "off" && tv4Power== "off") {
	
	
	
						
						 var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S2");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
	
						
						heatMapContainer.src='images/individual_floor_maps/Scenario2_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario2_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario2_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						scenario = "wifi2pt4_2";
						
						TweenMax.to(obj, .5, {value:condition2a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition2a);
						
						}});
						
						
	
					} else {
						// Scenerio 3 WiFi 2.4GHz
						//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(  tv2Power== "off" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
						
						
						
						
						var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S3");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
						
					
							heatMapContainer.src='images/individual_floor_maps/Scenario3_WiFi_2GHz_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario3_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario3_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
						scenario = "wifi2pt4_3";
										
						TweenMax.to(obj, .5, {value:condition3a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition3a);
						
						
						}});
						
						
	
					} else {
						// Scenerio 4 WiFi 2.4GHz
						//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power== "off" && tv1Power== "off" && tv3Power== "off" && tv5Power== "on" && tv4Power== "off") {
	
	
						 var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S4");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
						
						
						
							
							heatMapContainer.src='images/individual_floor_maps/Scenario4_WiFi_2GHz_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario4_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario4_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
								
						scenario = "wifi2pt4_4";	
										
						TweenMax.to(obj, .5, {value:condition4a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition4a);
						}});
						
	
	
					}	else {
						// Scenerio 5 WiFi 2.4GHz
						//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(  tv2Power== "off" && tv1Power== "off" && tv3Power== "off" && tv5Power== "off" && tv4Power== "on") {
						
						scenario = "wifi2pt4_5";
						
						var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S5");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							masterImage.src='images/device-not-optimal.png'
							TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						
						
							heatMapContainer.src='images/individual_floor_maps/Scenario5_WiFi_2GHz_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario5_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario5_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
						TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						TweenMax.to(obj, .5, {value:condition5a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition5a);
						}});	
						
						
	
					}else {
						// Scenerio 6 WiFi 2.4GHz
						//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(  tv2Power== "on" && tv1Power== "on" && tv3Power== "off" && tv5Power== "off" && tv4Power== "off") {
						
						//TweenMax.to(kitchenHDShield, .5, {css:{left:235, alpha:1, delay:0}, ease:Expo.easeOut});	
						//TweenMax.to(masterHDShield, .5, {css:{left:235, alpha:1, delay:0}, ease:Expo.easeOut});
						 var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S6");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
						var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S6");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
						
						heatMapContainer.src='images/individual_floor_maps/Scenario6_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario6_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario6_WiFi_2GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
						scenario = "wifi2pt4_6";
						
						TweenMax.to(obj, .5, {value:condition6a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition6a);
						}});	
	
					}else {
						// Scenerio 7 WiFi 2.4GHz
						//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
						
 						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S7");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						 }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
				
						var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S7");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
	
							heatMapContainer.src='images/individual_floor_maps/Scenario7_WiFi_2GHz_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario7_WiFi_2GHz_SecondFloor.jpg'
							heatMapContainer3.src='images/individual_floor_maps/Scenario7_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
						TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_7";
							
							TweenMax.to(obj, .5, {value:condition7a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition7a);
						}});
						
	
					} else {
						// Scenerio 8 WiFi 2.4GHz
						//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "off" && tv5Power== "on" && tv4Power== "off") {
						
								
							var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S8");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
				
						 var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S8");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
							
							
							
								
							heatMapContainer.src='images/individual_floor_maps/Scenario8_WiFi_2GHz_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario8_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario8_WiFi_2GHz_ThirdFloor.jpg'
						
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
						TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
							scenario = "wifi2pt4_8";
							
							
							TweenMax.to(obj, .5, {value:condition8a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
							output2.innerHTML = obj.value;
							tl.tweenTo(condition8a);
							
							
						}});
						
					}
					else {
						// Scenerio 9 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "off" && tv5Power== "off" && tv4Power== "on") {
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S9");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
                        var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S9");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
                        
              
							
							
							heatMapContainer.src='images/individual_floor_maps/Scenario9_WiFi_2GHz_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario9_WiFi_2GHz_SecondFloor.jpg'
							heatMapContainer3.src='images/individual_floor_maps/Scenario9_WiFi_2GHz_ThirdFloor.jpg'
						
							TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
							TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
							TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							scenario = "wifi2pt4_9";
							
							TweenMax.to(obj, .5, {value:condition9a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
							output2.innerHTML = obj.value;
							tl.tweenTo(condition9a);
						}});
	
					
					
					}
					else {
						// Scenerio 10 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(  tv2Power== "off" && tv1Power== "on" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
						
                         
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S10");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S10");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
		
						heatMapContainer.src='images/individual_floor_maps/Scenario10_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario10_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario10_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							scenario = "wifi2pt4_10";
							
							
							
							TweenMax.to(obj, .5, {value:condition10a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition10a);
						}});
						
						
						
						} else {
						// Scenerio 11 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "off" &&  tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "off") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S11");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S11");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
								
						heatMapContainer.src='images/individual_floor_maps/Scenario11_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario11_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario11_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							scenario = "wifi2pt4_11";
							TweenMax.to(obj, .5, {value:condition11a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
							output2.innerHTML = obj.value;
							tl.tweenTo(condition11a);
						
						}});
						
						
						} else {
						// Scenerio 12 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "off" && tv1Power == "on" && tv3Power == "off" && tv5Power == "off" && tv4Power == "on") {
						
 				                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S12");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S12");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
									
						heatMapContainer.src='images/individual_floor_maps/Scenario12_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario12_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario12_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_12";
							
							
							
							
							TweenMax.to(obj, .5, {value:condition12a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
							output2.innerHTML = obj.value;
							tl.tweenTo(condition12a);
						}});
						} else {
						// Scenerio 13 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "off" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
						
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S13");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S13");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
							
						heatMapContainer.src='images/S13_heatmap_WiFi_2GHz.png'
							
							
						heatMapContainer.src='images/individual_floor_maps/Scenario13_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario13_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario13_WiFi_2GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
							scenario = "wifi2pt4_13";
							
							TweenMax.to(obj, .5, {value:condition13a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition13a);
						}});
						} else {
						// Scenerio 14 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power== "off" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "on") {
						
 
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S14");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S14");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
            
						heatMapContainer.src='images/individual_floor_maps/Scenario14_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario14_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario14_WiFi_2GHz_ThirdFloor.jpg'
						
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_14";
							
							
							TweenMax.to(obj, .5, {value:condition14a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition14a);
						}});
						} else {
						// Scenerio 15 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "off" && tv1Power == "off" && tv3Power == "off" && tv5Power == "on" && tv4Power== "on") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S15");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S15");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        
						
						heatMapContainer.src='images/individual_floor_maps/Scenario15_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario15_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario15_WiFi_2GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_15";
							
							
							
							TweenMax.to(obj, .5, {value:condition15a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition15a);
						}});
						} else {
						// Scenerio 16 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "off" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S16");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S16");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        
                        
                        
                        
						 var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S16");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
						heatMapContainer.src='images/individual_floor_maps/Scenario16_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario16_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario16_WiFi_2GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_16";
							
							TweenMax.to(obj, .5, {value:condition16a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition16a);
						}});
						} else {
						// Scenerio 17 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "off" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "on") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S17");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S17");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S17");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
																
						heatMapContainer.src='images/individual_floor_maps/Scenario17_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario17_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario17_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_17";
							
							TweenMax.to(obj, .5, {value:condition17a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition17a);
						}});
						} else {
						// Scenerio 18 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power  == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "on") {
						
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S18");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                                                
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S18");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S18");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
								
									
						heatMapContainer.src='images/individual_floor_maps/Scenario18_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario18_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario18_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_18";
							
							TweenMax.to(obj, .5, {value:condition18a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition18a);
						}});
						} else {
						// Scenerio 19 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S19");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S19");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S19");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
									
									
						heatMapContainer.src='images/individual_floor_maps/Scenario19_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario19_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario19_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_19";
							
							TweenMax.to(obj, .5, {value:condition19a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition19a);
						}});
						} else {
						// Scenerio 20 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "off" && tv3Power == "off" && tv5Power == "on" && tv4Power == "on") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S20");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S20");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							masterImage.src='images/device-not-optimal.png'
TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S20");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
	
									
						heatMapContainer.src='images/individual_floor_maps/Scenario20_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario20_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario20_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_20";
							
							
							
							TweenMax.to(obj, .5, {value:condition20a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition20a);
						}});
						} else {
						// Scenerio 21 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "off" && tv4Power== "on") {
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S21");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S21");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S21");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
							
									
						heatMapContainer.src='images/individual_floor_maps/Scenario21_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario21_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario22_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_21";
							
							TweenMax.to(obj, .5, {value:condition21a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition21a);
						}});
						} else {
						// Scenerio 22 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S22");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S22");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S22");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
                        
 
								
									
						heatMapContainer.src='images/individual_floor_maps/Scenario22_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario22_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario22_WiFi_2GHz_ThirdFloor.jpg'
						
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_22";
							
							TweenMax.to(obj, .5, {value:condition22a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition22a);
						}});
						} else {
						// Scenerio 23 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "off" && tv4Power == "on") {
						
 
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S23");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S23");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                                               
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S23");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
								
									
						heatMapContainer.src='images/individual_floor_maps/Scenario23_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario23_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario23_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_23";
							
							TweenMax.to(obj, .5, {value:condition23a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition23a);
						}});
						} else {
						// Scenerio 24 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "off") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S24");
					    var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S24");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S24");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
								
									
						heatMapContainer.src='images/individual_floor_maps/Scenario24_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario24_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario24_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							scenario = "wifi2pt4_24";
							
							TweenMax.to(obj, .5, {value:condition24a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition24a);
						}});
						} else {
							
							
							
						// Scenerio 25 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "off") {
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S25");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S25");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S25");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
									
									
						heatMapContainer.src='images/individual_floor_maps/Scenario25_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario25_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario25_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						scenario = "wifi2pt4_25";
							
						TweenMax.to(obj, .5, {value:condition25a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition25a);
						}});
						} else {
							
							
							
							
						// Scenerio 26 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S26");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S26");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S26");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S26");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
							
									
						heatMapContainer.src='images/individual_floor_maps/Scenario26_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario26_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario26_WiFi_2GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_26";
							
					
							
							TweenMax.to(obj, .5, {value:condition26a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition26a);
						}});
						} else {
						// Scenerio 27  WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S27");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S27");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S27");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S27");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
                        
                       
									
						heatMapContainer.src='images/individual_floor_maps/Scenario27_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario27_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario27_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_27";
							
							
							
							TweenMax.to(obj, .5, {value:condition27a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition27a);
						}});
						} else {
						// Scenerio 28 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power== "on") {
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S28");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S28");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S28");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S28");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
									
						heatMapContainer.src='images/individual_floor_maps/Scenario28_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario28_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario28_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_28";
							
							
							
							TweenMax.to(obj, .5, {value:condition28a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition28a);
						}});
						} else {
						// Scenerio 29  WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "on") {
						
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S29");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S29");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S29");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
						var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S29");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
						
						
							
							
									
						heatMapContainer.src='images/individual_floor_maps/Scenario29_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario29_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario29_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_29";
							
				
							TweenMax.to(obj, .5, {value:condition29a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition29a);
						}});
						} else {
						// Scenerio 30 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power== "off") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S30");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S30");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S30");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S30");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
							//TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
							//kitchenImage.src='images/device-not-optimal.png'
							
									
						heatMapContainer.src='images/individual_floor_maps/Scenario30_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario30_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario30_WiFi_2GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_30";
							
							
							TweenMax.to(obj, .5, {value:condition30a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition30a);
						}});
						} else {
						// Scenerio 31 WiFi 2.4GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power== "on") {
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi24-S31");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi24-S31");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi24-S31");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi24-S31");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi24-S31");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
									
						heatMapContainer.src='images/individual_floor_maps/Scenario31_WiFi_2GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario31_WiFi_2GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario31_WiFi_2GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "wifi2pt4_31";	
									
							TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
							masterImage.src='images/device-not-optimal.png'
							
							
							TweenMax.to(obj, .5, {value:condition31a, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition31a);
						}});
						
					}
					}
						
					}
						
					}
						
					}
					}
					}
						
					}
						
					}
						
					}
						
					}
						
					}
						
					//}
					}
					}
					}
					}
					}
					}
					}
					}
					}
					}
					}
					}
					}
					}
					}
					
					}
					}
					}
					}
				}
			
			// WiFi 5GHz ////////////////
			
			function wifi5ConditionFunc(){
			// WiFi 5GHz	
				// Scenerio One
				
				TweenMax.to(kitchenHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(masterHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(livingHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(bedroomHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(denHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				
				TweenMax.to(kitchenNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(masterNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(livingNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(bedroomNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(denNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(heatMapContainer, 0, {css:{alpha:0}});
				TweenMax.to(heatMapContainer2, 0, {css:{alpha:0}});
				TweenMax.to(heatMapContainer3, 0, {css:{alpha:0}});
				
				if( tv2Power == "on" && tv1Power == "off" &&  tv3Power == "off" && tv5Power == "off" && tv4Power == "off") {
					
							
							
							var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S1");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};	
							heatMapContainer.src='images/individual_floor_maps/Scenario1_WiFi_5GHz_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario1_WiFi_5GHz_SecondFloor.jpg'
							heatMapContainer3.src='images/individual_floor_maps/Scenario1_WiFi_5GHz_ThirdFloor.jpg'
						
							TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
							TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							routerCaption.src='images/5GHz-router.png'
								
							scenario = "wifi5_1";
    				
					TweenMax.to(obj, .5, {value:condition1b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition1b);
					}});
    			} else {
					// Scenerio 2 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "on" && tv3Power== "off" && tv5Power== "off" && tv4Power== "off") {
							
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S2");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};							
								
							scenario = "wifi5_2";
							
						heatMapContainer.src='images/individual_floor_maps/Scenario2_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario2_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario2_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
					
					TweenMax.to(obj, .5, {value:condition2b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition2b);
					}});
    			} else {
					// Scenerio 3 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
					
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S3");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						heatMapContainer.src='images/individual_floor_maps/Scenario3_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario3_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario3_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							scenario = "wifi5_3";
											
					TweenMax.to(obj, .5, {value:condition3b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition3b);
					}});
    			} else {
					// Scenerio 4 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "off" && tv3Power== "off" && tv5Power== "on" && tv4Power== "off") {
			 			var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S4");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
							scenario = "wifi5_4";
							
						heatMapContainer.src='images/individual_floor_maps/Scenario4_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario4_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario4_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
		
									
					TweenMax.to(obj, .5, {value:condition4b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition4b);
					}});
    			} else {
					// Scenerio 5 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "off" && tv3Power== "off" && tv5Power== "off" && tv4Power== "on") {
					
					scenario = "wifi5_5";
				
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S5");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
						heatMapContainer.src='images/individual_floor_maps/Scenario5_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario5_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario5_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
								
					TweenMax.to(obj, .5, {value:condition5b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition5b);
					}});	
    			} else {
					// Scenerio 6 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "on" && tv1Power== "on" && tv3Power== "off" && tv5Power== "off" && tv4Power== "off") {
					scenario = "wifi5_6";
							
							
							var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S6");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S6");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
							
							
	
						heatMapContainer.src='images/individual_floor_maps/Scenario6_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario6_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario6_WiFi_5GHz_ThirdFloor.jpg'
						
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
							
					TweenMax.to(obj, .5, {value:condition6b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition6b);
					}});	
    			} else {
					// Scenerio 7 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
					scenario = "wifi5_7";
					
					
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S7");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S7");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
						
						heatMapContainer.src='images/individual_floor_maps/Scenario7_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario7_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario7_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
							
							
							
						TweenMax.to(obj, .5, {value:condition7b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition7b);
					}});
    			} else {
					// Scenerio 8 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "off" && tv5Power== "on" && tv4Power== "off") {
					scenario = "wifi5_8";
					
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S8");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S8");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        	
						
						heatMapContainer.src='images/individual_floor_maps/Scenario8_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario8_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario8_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition8b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
                        tl.tweenTo(condition8b);
						
					}});
    			} else {
					// Scenerio 9 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "off" && tv5Power== "off" && tv4Power== "on") {
					scenario = "wifi5_9";
					
						 var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S9");

					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S9");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
							
						heatMapContainer.src='images/individual_floor_maps/Scenario9_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario9_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario9_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
						TweenMax.to(obj, .5, {value:condition9b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition9b);
					}});
    			
				
				}
				else {
					// Scenerio 10 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "on" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
					
					scenario = "wifi5_10";
					
					
							 var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S10");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S10");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
						heatMapContainer.src='images/individual_floor_maps/Scenario10_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario10_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario10_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
		
						
						TweenMax.to(obj, .5, {value:condition10b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition10b);
					}});
					
					} else {
					// Scenerio 11 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" &&  tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "off") {
					scenario = "wifi5_11";
								
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S11");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
                        var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S11");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
							
		
						heatMapContainer.src='images/individual_floor_maps/Scenario11_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario11_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario11_WiFi_5GHz_ThirdFloor.jpg'
						
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
							
						
						TweenMax.to(obj, .5, {value:condition11b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition11b);
					}});
					} else {
					// Scenerio 12 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "on" && tv3Power == "off" && tv5Power == "off" && tv4Power == "on") {
							scenario = "wifi5_12";
							var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S12");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S12");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
							
						heatMapContainer.src='images/individual_floor_maps/Scenario12_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario12_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario12_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition12b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition12b);
					}});
					} else {
						
						
						
					// Scenerio 13 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
						scenario = "wifi5_13";
							
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S13");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                          
						 var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S13");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
						
								
						heatMapContainer.src='images/individual_floor_maps/Scenario13_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario13_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario13_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
						
						TweenMax.to(obj, .5, {value:condition13b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition13b);
					}});
					} else {
					// Scenerio 14 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power== "off" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "on") {
					scenario = "wifi5_14";
							
                       
						 var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S14");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S14");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
							
						heatMapContainer.src='images/individual_floor_maps/Scenario14_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario14_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario14_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
							
						TweenMax.to(obj, .5, {value:condition14b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
                        tl.tweenTo(condition14b);
					}});
					} else {
					// Scenerio 15 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "off" && tv3Power == "off" && tv5Power == "on" && tv4Power== "on") {
					scenario = "wifi5_15";
						
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S15");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S15");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
							
						heatMapContainer.src='images/individual_floor_maps/Scenario15_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario15_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario15_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
							
						TweenMax.to(obj, .5, {value:condition15b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition15b);
					}});
					} else {
					// Scenerio 16 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
					scenario = "wifi5_16";
							
						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S16");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S16");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                         var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S16");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
							
						heatMapContainer.src='images/individual_floor_maps/Scenario16_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario16_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario16_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition16b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition16b);
					}});
					} else {
					// Scenerio 17 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "on") {
					scenario = "wifi5_17";
							
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S17");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S17");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                          var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S17");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
							
						heatMapContainer.src='images/individual_floor_maps/Scenario17_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario17_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario17_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition17b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition17b);
					}});
					} else {
					// Scenerio 18 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power  == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "on") {
					
							scenario = "wifi5_18";
							
						var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S18");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
                         var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S18");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
						
						                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S18");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        	
							
							
						heatMapContainer.src='images/individual_floor_maps/Scenario18_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario18_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario18_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition18b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                    tl.tweenTo(condition18b);
					}});
					} else {
					// Scenerio 19 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
					scenario = "wifi5_19";
							
                      
                         var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S19");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
                         var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S19");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
							
						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S19");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						 }else{
							kitchenImage.src='images/device-not-optimal.png'					
							TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
							
							
						heatMapContainer.src='images/individual_floor_maps/Scenario19_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario19_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario19_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition19b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition19b);
					}});
					} else {
					// Scenerio 20 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "off" && tv3Power == "off" && tv5Power == "on" && tv4Power == "on") {
					scenario = "wifi5_20";
					
					
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S20");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S20");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S20");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
						
						
						
						heatMapContainer.src='images/individual_floor_maps/Scenario20_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario20_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario20_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition20b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
                        tl.tweenTo(condition20b);
					}});
					} else {
					// Scenerio 21 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "off" && tv4Power== "on") {
					scenario = "wifi5_21";
					
					
                        
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S21");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                         var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S21");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
  
                        var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S21");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
							
							
						heatMapContainer.src='images/individual_floor_maps/Scenario21_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario21_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario21_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition21b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition21b);
					}});
					} else {
					// Scenerio 22 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
						scenario = "wifi5_22";
						
						
				
						var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S22");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						}else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
						
  
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S22");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S22");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
							
						//HDOnFunc("masterHD");
						heatMapContainer.src='images/individual_floor_maps/Scenario22_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario22_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario22_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
							
						TweenMax.to(obj, .5, {value:condition22b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition22b);
					}});
					} else {
					// Scenerio 23 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "off" && tv4Power == "on") {
					scenario = "wifi5_23";
					
                          var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S23");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S23");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        	var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S23");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
					
						heatMapContainer.src='images/individual_floor_maps/Scenario23_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario23_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario23_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition23b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition23b);
					}});
					} else {
					// Scenerio 24 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "off") {
					scenario = "wifi5_24";
							
						var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S24");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
						if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
                        var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S24");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                 		var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S24");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						}else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        	
							
							heatMapContainer.src='images/individual_floor_maps/Scenario24_WiFi_5GHz_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario24_WiFi_5GHz_SecondFloor.jpg'
							heatMapContainer3.src='images/individual_floor_maps/Scenario24_WiFi_5GHz_ThirdFloor.jpg'
							
						    TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
							TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition24b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition24b);
					}});
					} else {
					// Scenerio 25 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "off") {
					scenario = "wifi5_25";
					
  						var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S25");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
						if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
                        var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S25");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						  }else{
							 livingImage.src='images/device-not-optimal.png'	
							TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
                        var BedroomDevice;
						 BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S25");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						 }else{
							 bedroomImage.src='images/device-not-optimal.png'
							 TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
						
						heatMapContainer.src='images/individual_floor_maps/Scenario25_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario25_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario25_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition25b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                     tl.tweenTo(condition25b);
					}});
					} else {
						
						
					// Scenerio 26 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
					scenario = "wifi5_26";
						
 
                         var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S26");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
						if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
							
                         
						var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S26");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						 }else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                                
		                        var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S26");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
  
                 		var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S26");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						 }else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
	
							
						heatMapContainer.src='images/individual_floor_maps/Scenario26_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario26_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario26_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
						TweenMax.to(obj, .5, {value:condition26b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
                    	tl.tweenTo(condition26b);
					}});
					} else {
					// Scenerio 27  WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
					scenario = "wifi5_27";
							
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S27");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						 }else{
							 livingImage.src='images/device-not-optimal.png'
							   TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
						 var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S27");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						 }else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                         
                         var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S27");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						 }else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
    
   						var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S27");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
  
							
						heatMapContainer.src='images/individual_floor_maps/Scenario27_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario27_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario27_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
	
						
						TweenMax.to(obj, .5, {value:condition27b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
                        tl.tweenTo(condition27b);
						
						
					}});
					} else {
					// Scenerio 28  WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power== "on") {
					scenario = "wifi5_28";
					
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S28");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						 }else{
							 livingImage.src='images/device-not-optimal.png'	
                              TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                         var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S28");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
						if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
							 denImage.src='images/device-not-optimal.png'
							 TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
                        
                         var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S28");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						 }else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
   						var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S28");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
							
							
						heatMapContainer.src='images/individual_floor_maps/Scenario28_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario28_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario29_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						TweenMax.to(obj, .5, {value:condition28b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
                        tl.tweenTo(condition28b);
					}});
					} else {
					// Scenerio 29 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "on") {
					scenario = "wifi5_29";
							var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S29");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						 }else{
							 livingImage.src='images/device-not-optimal.png'	
                              TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                         var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S29");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
						if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
   						var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S29");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                  
						 var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S29");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						 }else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                         	
							
						heatMapContainer.src='images/individual_floor_maps/Scenario29_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario29_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario29_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						
						TweenMax.to(obj, .5, {value:condition29b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition29b);
					}});
					} else {
					// Scenerio 30 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power== "off") {
					scenario = "wifi5_30";
							 var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S30");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						 }else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
                        
                         var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S30");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						 }else{
							 livingImage.src='images/device-not-optimal.png'	
                              TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                         var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S30");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
						if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
   						/*var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S1");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};*/
                  
						 var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S30");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						 }else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                         	

							
						heatMapContainer.src='images/individual_floor_maps/Scenario30_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario30_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario30_WiFi_5GHz_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						
						TweenMax.to(obj, .5, {value:condition30b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition30b);
					}});
					} else {
					// Scenerio 31 WiFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power== "on") {
					scenario = "wifi5_31";
 						var KitchenDevice=xmlDoc.getElementsByTagName("Kitchen-WiFi5-S31");
					     var PassFail=(KitchenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 kitchenImage.src='images/device-optimal.png'
							 HDOnFunc("kitchenHD")
						 }else{
							 kitchenImage.src='images/device-not-optimal.png'
							 TweenMax.to(kitchenNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                        
                        
                         var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-WiFi5-S31");
					     var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv1PassFail=="Pass"){
						 	 livingImage.src='images/device-optimal.png'
							 HDOnFunc("livingHD");	
						 }else{
							 livingImage.src='images/device-not-optimal.png'	
                              TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                        
                         var DenDevice=xmlDoc.getElementsByTagName("Den-WiFi5-S31");
					     var DenPassFail=(DenDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
						if (DenPassFail=="Pass"){
						 	 denImage.src='images/device-optimal.png'
							 HDOnFunc("denHD");	
						 }else{
						 denImage.src='images/device-not-optimal.png'	
                          TweenMax.to(denNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                        
   						var MasterDevice=xmlDoc.getElementsByTagName("Master-WiFi5-S31");
					     var PassFail=(MasterDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
							if (PassFail=="Pass"){
						 	 masterImage.src='images/device-optimal.png'
							 HDOnFunc("masterHD");	
						 }else{
							 masterImage.src='images/device-not-optimal.png'
							 TweenMax.to(masterNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});	
						};
                  
						 var BedroomDevice=xmlDoc.getElementsByTagName("Bedroom-WiFi5-S31");
					     var PassFail=(BedroomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (PassFail=="Pass"){
						 	 bedroomImage.src='images/device-optimal.png'
							 	HDOnFunc("bedroomHD");
						 }else{
							 bedroomImage.src='images/device-not-optimal.png'	
                             TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});
						};
                         	
							
						heatMapContainer.src='images/individual_floor_maps/Scenario31_WiFi_5GHz_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario31_WiFi_5GHz_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario31_WiFi_5GHz_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
					TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						TweenMax.to(obj, .5, {value:condition31b, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition31b);
					}});
					
				}
				}
					
				}
					
				}
					
				}
					
				}
					
				}
					
				}
					
				}
					
				}
					
				}
					
				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
				}
				
				}
				}
				}
				}
			};
			
			
			
			
			
			
// HyFi 5GHz ////////////////
			
			function hyfi5ConditionFunc(){
				TweenMax.to(kitchenHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(masterHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(livingHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(bedroomHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(denHDShield, .3, {css:{left:350, alpha:0}, ease:Expo.easeIn});
				
				TweenMax.to(kitchenNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(masterNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(livingNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(bedroomNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(denNotSupported, .3, {css:{left:363, alpha:0}, ease:Expo.easeIn});
				TweenMax.to(heatMapContainer, 0, {css:{alpha:0}});
				TweenMax.to(heatMapContainer2, 0, {css:{alpha:0}});
				TweenMax.to(heatMapContainer3, 0, {css:{alpha:0}});
				
				routerCaption.src='images/5GHz-router.png'
				
				
				if( tv2Power == "on" && tv1Power == "off" &&  tv3Power == "off" && tv5Power == "off" && tv4Power == "off") {
					
					
				var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S1");
				 var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
				if (tv1PassFail=="Pass"){
						HDOnFunc("livingHD");
				}else{
						TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
				};
				var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S1");
				var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
											
				if (livingRoomPersonality=="HRE"){
				livingImage.src='images/hybrid-range-extender-no-title.png'
				}else if (livingRoomPersonality=="Client"){
				livingImage.src='images/hybrid-client-no-title.png'	
  
				} 
					
			
				heatMapContainer.src='images/individual_floor_maps/Scenario1_HyFi_FirstFloor.jpg'
				heatMapContainer2.src='images/individual_floor_maps/Scenario1_HyFi_SecondFloor.jpg'
				heatMapContainer3.src='images/individual_floor_maps/Scenario1_HyFi_ThirdFloor.jpg'
				
				TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
				TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

					
				scenario = "hyfi5_1";
    				
					TweenMax.to(obj, .5, {value:condition1c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition1c);
					}});
    			} else {
// Scenerio 2  HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "on" && tv3Power== "off" && tv5Power== "off" && tv4Power== "off") {
							
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S2");
						var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						 
						if (tv2PassFail=="Pass"){
								HDOnFunc("denHD");
						}else{
								TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
		
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S2");
						var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
													
						if (denPersonality=="HRE"){
								denImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (denPersonality=="Client"){
								denImage.src='images/hybrid-client-no-title.png'	  
						} 
						
							
							
						heatMapContainer.src='images/individual_floor_maps/Scenario2_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario2_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario2_HyFi_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

							
						scenario = "hyfi5_2";	
						
						
						
							
					TweenMax.to(obj, .5, {value:condition2c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition2c);
					}});
    			} else {
// Scenerio 3  HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
					
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S3");
						var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						 
						if (tv3PassFail=="Pass"){
								HDOnFunc("bedroomHD");
						}else{
								TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
		
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S3");
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
													
						if (bedroomPersonality=="HRE"){
								bedroomImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (bedroomPersonality=="Client"){
								bedroomImage.src='images/hybrid-client-no-title.png'	  
						} 
						
						scenario = "hyfi5_3";	
						heatMapContainer.src='images/individual_floor_maps/Scenario3_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario3_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario3_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

		
					TweenMax.to(obj, .5, {value:condition3c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition3c);
					}});
    			} else {
// Scenerio 4  HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "off" && tv3Power== "off" && tv5Power== "on" && tv4Power== "off") {
						// KITCHEN DEVICES //
						var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S8");
						var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv4PassFail=="Pass"){
						HDOnFunc("kitchenHD");
						}else{
						TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S8");
						var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
						if (kitchenPersonality=="HRE"){
						kitchenImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (kitchenPersonality=="Client"){
						kitchenImage.src='images/hybrid-client-no-title.png'	
						
						} 
						// KITCHEN END//
					
						heatMapContainer.src='images/individual_floor_maps/Scenario4_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario4_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario4_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

	
					
					
					scenario = "hyfi5_4";
									
					TweenMax.to(obj, .5, {value:condition4c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition4c);
					}});
    			} else {
// Scenerio 5  HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "off" && tv3Power== "off" && tv5Power== "off" && tv4Power== "on") {
					
					   // MASTER DEVICE START //
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S5");
						var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						 
						if (tv5PassFail=="Pass"){
								HDOnFunc("masterHD");
						}else{
								TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
		
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S5");
						var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
													
						if (masterPersonality=="HRE"){
								masterImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (masterPersonality=="Client"){
								masterImage.src='images/hybrid-client-no-title.png'	  
						} 
					
					  	// MASTER DEVICE //
							
								
						heatMapContainer.src='images/individual_floor_maps/Scenario5_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario5_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario5_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

							
							
						scenario = "hyfi5_5";
							
								
					TweenMax.to(obj, .5, {value:condition5c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition5c);
					}});	
    			} else {
	// Scenerio 6 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "on" && tv1Power== "on" && tv3Power== "off" && tv5Power== "off" && tv4Power== "off") {
					
						// LIVINGROOM DEVICES //
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S6");
						 var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
			
						if (tv1PassFail=="Pass"){
								HDOnFunc("livingHD");
						}else{
								TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
			
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S6");
						var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
													
						if (livingRoomPersonality=="HRE"){
						livingImage.src='images/hybrid-range-extender-no-title.png'
			
						}else if (livingRoomPersonality=="Client"){
						livingImage.src='images/hybrid-client-no-title.png'	
			
						} 
						// LIVINGROOM END//
						
				
						//DEN DEVICE //
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S6");
						var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						 
						if (tv2PassFail=="Pass"){
								HDOnFunc("denHD");
						}else{
								TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
		
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S6");
						var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
													
						if (denPersonality=="HRE"){
								denImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (denPersonality=="Client"){
								denImage.src='images/hybrid-client-no-title.png'	  
						} 
						// DEN END//
						heatMapContainer.src='images/individual_floor_maps/Scenario6_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario6_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario6_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

	
						scenario = "hyfi5_6";
							
							
					TweenMax.to(obj, .5, {value:condition6c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    				output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition6c);
					}});	
    			} else {
// Scenerio 7 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
					
					
						// LIVINGROOM DEVICES //
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S7");
						 var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
			
						if (tv1PassFail=="Pass"){
								HDOnFunc("livingHD");
						}else{
								TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
			
						
						var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
													
						if (livingRoomPersonality=="HRE"){
						livingImage.src='images/hybrid-range-extender-no-title.png'
			
						}else if (livingRoomPersonality=="Client"){
						livingImage.src='images/hybrid-client-no-title.png'	
			
						} 
						// LIVINGROOM END//
						
						// BEDROOM DEVICES //
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S7");
						
						 var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
			
						if (tv3PassFail=="Pass"){
								HDOnFunc("bedroomHD");
						}else{
								TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
			
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
													
						if (bedroomPersonality=="HRE"){
						bedroomImage.src='images/hybrid-range-extender-no-title.png'
			
						}else if (bedroomPersonality=="Client"){
						bedroomImage.src='images/hybrid-client-no-title.png'	
			
						} 
						//  BEDROOM END  //
                        heatMapContainer.src='images/individual_floor_maps/Scenario7_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario7_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario7_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

							
							
							scenario = "hyfi5_7";
							
						TweenMax.to(obj, .5, {value:condition7c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition7c);
					}});
    			} else {
// Scenerio 8 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "off" && tv5Power== "on" && tv4Power== "off") {
					
						// LIVINGROOM DEVICES //
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S8");
						var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv1PassFail=="Pass"){
						HDOnFunc("livingHD");
						}else{
						TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S8");
						var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
											
						if (livingRoomPersonality=="HRE"){
						livingImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (livingRoomPersonality=="Client"){
						livingImage.src='images/hybrid-client-no-title.png'	
						
						} 
						// LIVINGROOM END//
						
						// KITCHEN DEVICES //
						var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S8");
						var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv4PassFail=="Pass"){
						HDOnFunc("kitchenHD");
						}else{
						TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S8");
						var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
						if (kitchenPersonality=="HRE"){
						kitchenImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (kitchenPersonality=="Client"){
						kitchenImage.src='images/hybrid-client-no-title.png'	
						
						} 
						// KITCHEN END//
	
                           heatMapContainer.src='images/individual_floor_maps/Scenario8_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario8_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario8_HyFi_ThirdFloor.jpg'
						
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

					
					
						scenario = "hyfi5_8";
							
						TweenMax.to(obj, .5, {value:condition8c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition8c);
					}});
    			} else {
// Scenerio 9 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "on" && tv1Power== "off" && tv3Power== "off" && tv5Power== "off" && tv4Power== "on") {
						// LIVINGROOM DEVICE //
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S9");
						var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv1PassFail=="Pass"){
						HDOnFunc("livingHD");
						}else{
						TweenMax.to(livingNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S9");
						var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
									
						if (livingRoomPersonality=="HRE"){
						livingImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (livingRoomPersonality=="Client"){
						livingImage.src='images/hybrid-client-no-title.png'	
						
						} 
						// LIVINGROOM END//
						
						
						
						// MASTER DEVICE START //
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S9");
						var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv5PassFail=="Pass"){
						HDOnFunc("masterHD");
						}else{
						TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S9");
						var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
									
						if (masterPersonality=="HRE"){
						masterImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (masterPersonality=="Client"){
						masterImage.src='images/hybrid-client-no-title.png'	  
						} 
						
						// MASTER DEVICE //
								
		                 heatMapContainer.src='images/individual_floor_maps/Scenario9_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario9_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario9_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

							
						scenario = "hyfi5_9";
								
						
						TweenMax.to(obj, .5, {value:condition9c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition9c);
					}});
    			
				
				}
				else {
// Scenerio 10 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(  tv2Power== "off" && tv1Power== "on" && tv3Power== "on" && tv5Power== "off" && tv4Power== "off") {
					
							
					
					// BEDROOM DEVICES //
					var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S10");
					
					var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv3PassFail=="Pass"){
					HDOnFunc("bedroomHD");
					}else{
					TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
					if (bedroomPersonality=="HRE"){
					bedroomImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (bedroomPersonality=="Client"){
					bedroomImage.src='images/hybrid-client-no-title.png'	
					
					} 
					//  BEDROOM END  //
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S10");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S10");
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
					heatMapContainer.src='images/individual_floor_maps/Scenario10_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario10_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario10_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

							
						scenario = "hyfi5_10";
							
							
						TweenMax.to(obj, .5, {value:condition10c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition10c);
					}});
					
					} else {
// Scenerio 11 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" &&  tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "off") {
					
								
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S11");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S11");
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
					
					
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S11");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S11");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
	
							
						heatMapContainer.src='images/individual_floor_maps/Scenario11_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario11_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario11_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

							
							scenario = "hyfi5_11";
							
							
						TweenMax.to(obj, .5, {value:condition11c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition11c);
					}});
					} else {
// Scenerio 12 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "on" && tv3Power == "off" && tv5Power == "off" && tv4Power == "on") {
					
						
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S12");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S12");
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					
					
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S12");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S12");
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
								
						heatMapContainer.src='images/individual_floor_maps/Scenario12_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario12_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario12_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});

							
							scenario = "hyfi5_12";
							
							
						TweenMax.to(obj, .5, {value:condition12c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition12c);
					}});
					} else {
// Scenerio 13 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
					
							
							
					// BEDROOM DEVICES //
					var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S13");
					
					var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv3PassFail=="Pass"){
					HDOnFunc("bedroomHD");
					}else{
					TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (bedroomPersonality=="HRE"){
					bedroomImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (bedroomPersonality=="Client"){
					bedroomImage.src='images/hybrid-client-no-title.png'	
					
					} 
					//  BEDROOM END  //
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S13");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S13");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
						
						heatMapContainer.src='images/individual_floor_maps/Scenario13_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario13_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario13_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							scenario = "hyfi5_13";
						
						TweenMax.to(obj, .5, {value:condition13c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition13c);
					}});
					} else {
// Scenerio 14 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power== "off" && tv1Power== "off" && tv3Power== "on" && tv5Power== "off" && tv4Power== "on") {
					
							
						// BEDROOM DEVICES //
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S14");
						
						var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv3PassFail=="Pass"){
						HDOnFunc("bedroomHD");
						}else{
						TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (bedroomPersonality=="HRE"){
						bedroomImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (bedroomPersonality=="Client"){
						bedroomImage.src='images/hybrid-client-no-title.png'	
						
						} 
						//  BEDROOM END  //
						
						
						
						
						
						// MASTER DEVICE START //
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S14");
						var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv5PassFail=="Pass"){
						HDOnFunc("masterHD");
						}else{
						TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S14");
						var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
						if (masterPersonality=="HRE"){
						masterImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (masterPersonality=="Client"){
						masterImage.src='images/hybrid-client-no-title.png'	  
						} 
						
						// MASTER DEVICE //
	
							
						heatMapContainer.src='images/individual_floor_maps/Scenario14_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario14_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario14_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "hyfi5_14";
						
						TweenMax.to(obj, .5, {value:condition14c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition14c);
					}});
					} else {
// Scenerio 15 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "off" && tv3Power == "off" && tv5Power == "on" && tv4Power== "on") {
					
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S15");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S15");
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S15");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S15");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
							
					heatMapContainer.src='images/individual_floor_maps/Scenario15_HyFi_FirstFloor.jpg'
					heatMapContainer2.src='images/individual_floor_maps/Scenario15_HyFi_SecondFloor.jpg'
					heatMapContainer3.src='images/individual_floor_maps/Scenario15_HyFi_ThirdFloor.jpg'
					
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							scenario = "hyfi5_15";
							
							
						TweenMax.to(obj, .5, {value:condition15c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition15c);
					}});
					} else {
// Scenerio 16 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
					
						
														
							masterImage.src='images/device-optimal.png'
										
							heatMapContainer.src='images/individual_floor_maps/Scenario16_HyFi_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario16_HyFi_SecondFloor.jpg'
							heatMapContainer3.src='images/individual_floor_maps/Scenario16_HyFi_ThirdFloor.jpg'
							
							TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
							TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							
							// BEDROOM DEVICES //
							var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S16");
							
							var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv3PassFail=="Pass"){
							HDOnFunc("bedroomHD");
							}else{
							TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
							};
							
							var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
							if (bedroomPersonality=="HRE"){
							bedroomImage.src='images/hybrid-range-extender-no-title.png'
							
							}else if (bedroomPersonality=="Client"){
							bedroomImage.src='images/hybrid-client-no-title.png'	
							
							} 
							//  BEDROOM END  //
							
							
							
							
							
							// MASTER DEVICE START //
							var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S16");
							var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv5PassFail=="Pass"){
							HDOnFunc("masterHD");
							}else{
							TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
							};
							
							var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S16");
							var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
									
							if (masterPersonality=="HRE"){
							masterImage.src='images/hybrid-range-extender-no-title.png'
							
							}else if (masterPersonality=="Client"){
							masterImage.src='images/hybrid-client-no-title.png'	  
							} 
							
							// MASTER DEVICE //
							
							
							// KITCHEN DEVICES //
							var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S16");
							var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
							
							if (tv4PassFail=="Pass"){
							HDOnFunc("kitchenHD");
							}else{
							TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
							};
							
							var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S16");
							var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
							if (kitchenPersonality=="HRE"){
							kitchenImage.src='images/hybrid-range-extender-no-title.png'
							
							}else if (kitchenPersonality=="Client"){
							kitchenImage.src='images/hybrid-client-no-title.png'	
							
							} 
							// KITCHEN END//
							
							scenario = "hyfi5_16";
							
							
						TweenMax.to(obj, .5, {value:condition16c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition16c);
					}});
					} else {
// Scenerio 17 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "on") {
							
							
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S17");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
								
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S17");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
					
					
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S17");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
								
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
						
						heatMapContainer.src='images/individual_floor_maps/Scenario17_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario17_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario17_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
						
						scenario = "hyfi5_17";
						
						TweenMax.to(obj, .5, {value:condition17c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition17c);
						
					}});
					} else {
// Scenerio 18 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power  == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "on") {
					
						//DEN DEVICE //
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S18");
						var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv2PassFail=="Pass"){
						HDOnFunc("denHD");
						}else{
						TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S18");
						var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (denPersonality=="HRE"){
						denImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (denPersonality=="Client"){
						denImage.src='images/hybrid-client-no-title.png'	  
						} 
						// DEN END//
						// BEDROOM DEVICES //
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S18");
						
						var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv3PassFail=="Pass"){
						HDOnFunc("bedroomHD");
						}else{
						TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (bedroomPersonality=="HRE"){
						bedroomImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (bedroomPersonality=="Client"){
						bedroomImage.src='images/hybrid-client-no-title.png'	
						
						} 
						//  BEDROOM END  //
						// MASTER DEVICE START //
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S18");
						var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv5PassFail=="Pass"){
						HDOnFunc("masterHD");
						}else{
						TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S18");
						var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (masterPersonality=="HRE"){
						masterImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (masterPersonality=="Client"){
						masterImage.src='images/hybrid-client-no-title.png'	  
						} 
						
						// MASTER DEVICE //
							
						heatMapContainer.src='images/individual_floor_maps/Scenario18_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario18_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario18_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
								
						scenario = "hyfi5_18";
						
						
						TweenMax.to(obj, .5, {value:condition18c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
                                   tl.tweenTo(condition18c);
					}});
					} else {
// Scenerio 19 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
					
											
											
						//DEN DEVICE //
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S19");
						var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv2PassFail=="Pass"){
						HDOnFunc("denHD");
						}else{
						TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						if (denPersonality=="HRE"){
						denImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (denPersonality=="Client"){
						denImage.src='images/hybrid-client-no-title.png'	  
						} 
						// DEN END//
						
						
						// BEDROOM DEVICES //
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S19");
						
						var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv3PassFail=="Pass"){
						HDOnFunc("bedroomHD");
						}else{
						TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (bedroomPersonality=="HRE"){
						bedroomImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (bedroomPersonality=="Client"){
						bedroomImage.src='images/hybrid-client-no-title.png'	
						
						} 
						//  BEDROOM END  //
						
						
						// KITCHEN DEVICES //
						var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S19");
						var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv4PassFail=="Pass"){
						HDOnFunc("kitchenHD");
						}else{
						TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						
						var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (kitchenPersonality=="HRE"){
						kitchenImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (kitchenPersonality=="Client"){
						kitchenImage.src='images/hybrid-client-no-title.png'	
						
						} 
						// KITCHEN END//
						heatMapContainer.src='images/individual_floor_maps/Scenario19_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario19_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario19_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						scenario = "hyfi5_19";	
						
						TweenMax.to(obj, .5, {value:condition19c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
                        tl.tweenTo(condition19c);
						
					}});
					} else {
// Scenerio 20 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "off" && tv3Power == "off" && tv5Power == "on" && tv4Power == "on") {
							
									
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S20");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S20");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
					
					
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S20");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S20");
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					
					
					
					// LIVINGROOM DEVICE //
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S20");
					var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv1PassFail=="Pass"){
					HDOnFunc("livingHD");
					}else{
					TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S20");
					var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
					if (livingRoomPersonality=="HRE"){
					livingImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (livingRoomPersonality=="Client"){
					livingImage.src='images/hybrid-client-no-title.png'	
					}
					// LIVINGROOM END//
						heatMapContainer.src='images/individual_floor_maps/Scenario20_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario20_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario20_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
						scenario = "hyfi5_20";
						
						
						TweenMax.to(obj, .5, {value:condition20c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition20c);
					}});
					} else {
// Scenerio 21 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "off" && tv4Power== "on") {
					
						// BEDROOM DEVICES //
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S21");
						
						var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv3PassFail=="Pass"){
						HDOnFunc("bedroomHD");
						}else{
						TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};

						
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						if (bedroomPersonality=="HRE"){
						bedroomImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (bedroomPersonality=="Client"){
						bedroomImage.src='images/hybrid-client-no-title.png'	
						
						} 
						//  BEDROOM END  //
						
						// MASTER DEVICE START //
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S21");
						var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv5PassFail=="Pass"){
						HDOnFunc("masterHD");
						}else{
						TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						
						var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
						if (masterPersonality=="HRE"){
						masterImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (masterPersonality=="Client"){
						masterImage.src='images/hybrid-client-no-title.png'	  
						} 
						
						// MASTER DEVICE //
						
						// LIVINGROOM DEVICE //
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S21");
						var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv1PassFail=="Pass"){
						HDOnFunc("livingHD");
						}else{
						TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						
						var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
						if (livingRoomPersonality=="HRE"){
						livingImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (livingRoomPersonality=="Client"){
						livingImage.src='images/hybrid-client-no-title.png'	
						
						} 
						// LIVINGROOM END//
	
						heatMapContainer.src='images/individual_floor_maps/Scenario21_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario21_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario21_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
	TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
							
						scenario = "hyfi5_21";
						
						
						
						TweenMax.to(obj, .5, {value:condition21c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition21c);
					}});
					} else {
// Scenerio 22 HyFi 5GHz
					//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "off") {
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S22");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S22");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
					
					
					
					// LIVINGROOM DEVICE //
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S22");
					var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv1PassFail=="Pass"){
					HDOnFunc("livingHD");
					}else{
					TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S22");
					var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
								
					if (livingRoomPersonality=="HRE"){
					livingImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (livingRoomPersonality=="Client"){
					livingImage.src='images/hybrid-client-no-title.png'	
					}
					// LIVINGROOM END//
					
					
					// BEDROOM DEVICES //
					var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S22");
					
					var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv3PassFail=="Pass"){
					HDOnFunc("bedroomHD");
					}else{
					TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (bedroomPersonality=="HRE"){
					bedroomImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (bedroomPersonality=="Client"){
					bedroomImage.src='images/hybrid-client-no-title.png'	
					
					} 
					//  BEDROOM END  //
					heatMapContainer.src='images/individual_floor_maps/Scenario22_HyFi_FirstFloor.jpg'
					heatMapContainer2.src='images/individual_floor_maps/Scenario22_HyFi_SecondFloor.jpg'
					heatMapContainer3.src='images/individual_floor_maps/Scenario22_HyFi_ThirdFloor.jpg'
					
					TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
					TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
					TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
					
					
					//DEVICE PROFILES
					livingImage.src='images/hybrid-range-extender-no-title.png'
					bedroomImage.src='images/hybrid-range-extender-no-title.png'	
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					scenario = "hyfi5_22";
					
					TweenMax.to(obj, .5, {value:condition22c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition22c);
							
					}});
					} else {
					// Scenerio 23 HyFi 5GHz
					//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "off" && tv4Power == "on") {
							
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S23");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S23");
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S23");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
					
					
					// LIVINGROOM DEVICE //
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S23");
					var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv1PassFail=="Pass"){
					HDOnFunc("livingHD");
					}else{
					TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S23");
					var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
					if (livingRoomPersonality=="HRE"){
					livingImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (livingRoomPersonality=="Client"){
					livingImage.src='images/hybrid-client-no-title.png'	
					}
					// LIVINGROOM END//
					
					
						heatMapContainer.src='images/individual_floor_maps/Scenario23_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario23_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario23_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
						
						scenario = "hyfi5_23";
						
						TweenMax.to(obj, .5, {value:condition23c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						   tl.tweenTo(condition23c);
					}});
					} else {
// Scenerio 24 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power == "off") {
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S24");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
					
					
					// LIVINGROOM DEVICE //
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S24");
					var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv1PassFail=="Pass"){
					HDOnFunc("livingHD");
					}else{
					TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S24");
					var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
					if (livingRoomPersonality=="HRE"){
					livingImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (livingRoomPersonality=="Client"){
					livingImage.src='images/hybrid-client-no-title.png'	
					}
					// LIVINGROOM END//
					
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S24");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S24");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
					
						
						heatMapContainer.src='images/individual_floor_maps/Scenario24_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario24_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario24_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
						
						scenario = "hyfi5_24";
						
						TweenMax.to(obj, .5, {value:condition24c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition24c);
						
					}});
					} else {
// Scenerio 25 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "off") {
					
						
						// BEDROOM DEVICES //
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S25");
						
						var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv3PassFail=="Pass"){
						HDOnFunc("bedroomHD");
						}else{
						TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (bedroomPersonality=="HRE"){
						bedroomImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (bedroomPersonality=="Client"){
						bedroomImage.src='images/hybrid-client-no-title.png'	
						
						} 
						//  BEDROOM END  //
						
						//DEN DEVICE //
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S25");
						var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv2PassFail=="Pass"){
						HDOnFunc("denHD");
						}else{
						TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
							
						if (denPersonality=="HRE"){
						denImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (denPersonality=="Client"){
						denImage.src='images/hybrid-client-no-title.png'	  
						} 
						// DEN END//
						
						
						// LIVINGROOM DEVICE //
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S25");
						var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv1PassFail=="Pass"){
						HDOnFunc("livingHD");
						}else{
						TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S25");
						var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
										
						if (livingRoomPersonality=="HRE"){
						livingImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (livingRoomPersonality=="Client"){
						livingImage.src='images/hybrid-client-no-title.png'	
						}
						// LIVINGROOM END//
						
						
							
							heatMapContainer.src='images/individual_floor_maps/Scenario25_HyFi_FirstFloor.jpg'
							heatMapContainer2.src='images/individual_floor_maps/Scenario25_HyFi_SecondFloor.jpg'
							heatMapContainer3.src='images/individual_floor_maps/Scenario25_HyFi_ThirdFloor.jpg'
							
							TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
							TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							
							
							
							scenario = "hyfi5_25";
							
							TweenMax.to(obj, .5, {value:condition25c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
							output2.innerHTML = obj.value;
							tl.tweenTo(condition25c);
					}});
					} else {
// Scenerio 26 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "off" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
					
							
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S26");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S26");
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
								
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					// BEDROOM DEVICES //
					var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S26");
					
					var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv3PassFail=="Pass"){
					HDOnFunc("bedroomHD");
					}else{
					TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (bedroomPersonality=="HRE"){
					bedroomImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (bedroomPersonality=="Client"){
					bedroomImage.src='images/hybrid-client-no-title.png'	
					
					} 
					//  BEDROOM END  //
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S26");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
								
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
					
					
					
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S26");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S26");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
					
						heatMapContainer.src='images/individual_floor_maps/Scenario26_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario26_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario26_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
	
						
						
						scenario = "hyfi5_26";
						TweenMax.to(obj, .5, {value:condition26c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition26c);
						
					}});
					} else {
// Scenerio 27 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "off" && tv3Power == "on" && tv5Power == "on" && tv4Power == "on") {
						
						// MASTER DEVICE START //
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S27");
						var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv5PassFail=="Pass"){
						HDOnFunc("masterHD");
						}else{
						TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S27");
						var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
								
						if (masterPersonality=="HRE"){
						masterImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (masterPersonality=="Client"){
						masterImage.src='images/hybrid-client-no-title.png'	  
						} 
						
						// MASTER DEVICE //
						
						// BEDROOM DEVICES //
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S27");
						
						var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv3PassFail=="Pass"){
						HDOnFunc("bedroomHD");
						}else{
						TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (bedroomPersonality=="HRE"){
						bedroomImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (bedroomPersonality=="Client"){
						bedroomImage.src='images/hybrid-client-no-title.png'	
						
						} 
						//  BEDROOM END  //
						
						
						// LIVINGROOM DEVICE //
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S27");
						var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv1PassFail=="Pass"){
						HDOnFunc("livingHD");
						}else{
						TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S27");
						var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
											
						if (livingRoomPersonality=="HRE"){
						livingImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (livingRoomPersonality=="Client"){
						livingImage.src='images/hybrid-client-no-title.png'	
						}
						// LIVINGROOM END//
						
						
						// KITCHEN DEVICES //
						var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S27");
						var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						if (tv4PassFail=="Pass"){
						HDOnFunc("kitchenHD");
						}else{
						TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S27");
						var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						if (kitchenPersonality=="HRE"){
						kitchenImage.src='images/hybrid-range-extender-no-title.png'
						
						}else if (kitchenPersonality=="Client"){
						kitchenImage.src='images/hybrid-client-no-title.png'	
						
						} 
						// KITCHEN END//
						
						heatMapContainer.src='images/individual_floor_maps/Scenario27_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario27_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario27_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
			TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						scenario = "hyfi5_27";
						
						
							TweenMax.to(obj, .5, {value:condition27c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
							output.innerHTML = obj.value;
							output2.innerHTML = obj.value;
							tl.tweenTo(condition27c);
					}});
					} else {
// Scenerio 28 HyFi 5GHz
							//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    // 
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "off" && tv5Power == "on" && tv4Power== "on") {
					
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S28");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S28");
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S28");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
					
					
					// LIVINGROOM DEVICE //
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S28");
					var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv1PassFail=="Pass"){
					HDOnFunc("livingHD");
					}else{
					TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S28");
					var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (livingRoomPersonality=="HRE"){
					livingImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (livingRoomPersonality=="Client"){
					livingImage.src='images/hybrid-client-no-title.png'	
					}
					// LIVINGROOM END//
					
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S28");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S28");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
					
							
						heatMapContainer.src='images/individual_floor_maps/Scenario28_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario28_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario28_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						scenario = "hyfi5_28";
						
						TweenMax.to(obj, .5, {value:condition28c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
                        tl.tweenTo(condition28c);
						
					}});
					} else {
// Scenerio 29 HyFi 5GHz
//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    //
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "off" && tv4Power == "on") {
						
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S29");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S29");
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
								
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					// BEDROOM DEVICES //
					var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S29");
					
					var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv3PassFail=="Pass"){
					HDOnFunc("bedroomHD");
					}else{
					TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (bedroomPersonality=="HRE"){
					bedroomImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (bedroomPersonality=="Client"){
					bedroomImage.src='images/hybrid-client-no-title.png'	
					
					} 
					//  BEDROOM END  //
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S29");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
								
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
					
					
					// LIVINGROOM DEVICE //
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S29");
					var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv1PassFail=="Pass"){
						HDOnFunc("livingHD");
					}else{
						TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S29");
					var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
											
					if (livingRoomPersonality=="HRE"){
					livingImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (livingRoomPersonality=="Client"){
					livingImage.src='images/hybrid-client-no-title.png'	
					}
					// LIVINGROOM END//
							
						heatMapContainer.src='images/individual_floor_maps/Scenario29_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario29_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario29_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
						TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						scenario = "hyfi5_29";
							
						
						TweenMax.to(obj, .5, {value:condition29c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition29c);
					}});
					} else {
				// Scenerio 30 HyFi 5GHz
					//   Living Room   //     Den		   //      Bedroom       //     Kitchen      //      Master Bedroom    // 
					if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power== "off") {
					
					// MASTER DEVICE START //
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S30");
					var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv5PassFail=="Pass"){
					HDOnFunc("masterHD");
					}else{
					TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S30");
					var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
					if (masterPersonality=="HRE"){
					masterImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (masterPersonality=="Client"){
					masterImage.src='images/hybrid-client-no-title.png'	  
					} 
					
					// MASTER DEVICE //
					
					// BEDROOM DEVICES //
					var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S30");
					
					var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv3PassFail=="Pass"){
					HDOnFunc("bedroomHD");
					}else{
					TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (bedroomPersonality=="HRE"){
					bedroomImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (bedroomPersonality=="Client"){
					bedroomImage.src='images/hybrid-client-no-title.png'	
					
					} 
					//  BEDROOM END  //
					
					//DEN DEVICE //
					var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S30");
					var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv2PassFail=="Pass"){
					HDOnFunc("denHD");
					}else{
					TweenMax.to(denNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
					if (denPersonality=="HRE"){
					denImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (denPersonality=="Client"){
					denImage.src='images/hybrid-client-no-title.png'	  
					} 
					// DEN END//
					
					
					// LIVINGROOM DEVICE //
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S30");
					var tv1PassFail=(tv1Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv1PassFail=="Pass"){
					HDOnFunc("livingHD");
					}else{
					TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv1Device=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S30");
					var livingRoomPersonality=(tv1Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
									
					if (livingRoomPersonality=="HRE"){
					livingImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (livingRoomPersonality=="Client"){
					livingImage.src='images/hybrid-client-no-title.png'	
					}
					// LIVINGROOM END//
					
					
					// KITCHEN DEVICES //
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S30");
					var tv4PassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
					
					if (tv4PassFail=="Pass"){
					HDOnFunc("kitchenHD");
					}else{
					TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
					};
					
					var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S30");
					var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
					
					if (kitchenPersonality=="HRE"){
					kitchenImage.src='images/hybrid-range-extender-no-title.png'
					
					}else if (kitchenPersonality=="Client"){
					kitchenImage.src='images/hybrid-client-no-title.png'	
					
					} 
					// KITCHEN END//
						heatMapContainer.src='images/individual_floor_maps/Scenario30_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario30_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario30_HyFi_ThirdFloor.jpg'
						
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
							scenario = "hyfi5_30";
						
						TweenMax.to(obj, .5, {value:condition30c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
    					output.innerHTML = obj.value;
					output2.innerHTML = obj.value;
					tl.tweenTo(condition30c);
					}});
					} else {
						
						
						
						
						
						
						
					// Scenerio 31 HyFi 5GHz
						// Living Room   //    Den	       	  //  Bedroom   //   	   Kitchen    //   	   Master Bedroom    //
						if(tv2Power == "on" && tv1Power == "on" && tv3Power == "on" && tv5Power == "on" && tv4Power== "on") {
                       
					   
					   
					   

                      // TV5 DEVICE ON START //
     					//Create varibles to assign XML values to//
						var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S31");
						var tv5PassFail=(tv5Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
                      // if tv5PassFail equals "Pass" cover master button with HD Supported panel. //
						if (tv5PassFail=="Pass"){
						HDOnFunc("masterHD");
						//HDOnFunc("tv5HD");
						}else{
                        
                      // if tv5PassFail equals "Fail" change button cover to Not Supported Notice. //
						TweenMax.to(masterNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
					
                      //Create varibles to assign XML values to check//
						//var tv5Device=xmlDoc.getElementsByTagName("Master-HyFi-S31");
						var masterPersonality=(tv5Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
                      // If XML value is "HRE" change device icon to Hybrid Range Extender
						if (masterPersonality=="HRE"){
						masterImage.src='images/hybrid-range-extender-no-title.png'
						 
                      // If XML value is "Client" change device icon to Hybrid Client
						}else if (masterPersonality=="Client"){
						masterImage.src='images/hybrid-client-no-title.png'	  
						} 
						// MASTER DEVICE //
						





						// TV3 DEVICE ON START //
                        //Create varibles to assign XML values to//
						var tv3Device=xmlDoc.getElementsByTagName("Bedroom-HyFi-S31");
						var tv3PassFail=(tv3Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
                        
						// if tv3PassFail equals "Pass" cover bedroom button with HD Supported panel. //
						if (tv3PassFail=="Pass"){
						HDOnFunc("bedroomHD");
						}else{
                        
                      // tv3PassFail equals "Fail" change button cover to Not Supported Notice. //
						TweenMax.to(bedroomNotSupported, .5, 	{css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						 
                      //Create varibles to assign XML values to check//
						var bedroomPersonality=(tv3Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
                      // If XML value is "HRE" change device icon to Hybrid Range Extender
						if (bedroomPersonality=="HRE"){
						bedroomImage.src='images/hybrid-range-extender-no-title.png'
						
                      // If XML value is "Client" change device icon to Hybrid Client
						}else if (bedroomPersonality=="Client"){
						bedroomImage.src='images/hybrid-client-no-title.png'	
						} 
						//  BEDROOM END  //
						
                        
                        
                        
						
					
                        
						//TV2 DEVICE ON START //
                        //Create varibles to assign XML values to//
						var tv2Device=xmlDoc.getElementsByTagName("Den-HyFi-S31");
						var tv2PassFail=(tv2Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
                      // if tv2PassFail equals "Pass" cover den button with HD Supported panel. //
						if (tv2PassFail=="Pass"){
						HDOnFunc("denHD");
                        }else{
                        
                      // if tv2PassFail equals "Pass" cover den button with HD Supported panel. //
						TweenMax.to(denNotSupported, .5,  {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
                      //Create varibles to assign XML values to check//
						var denPersonality=(tv2Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
                      // If XML value is "HRE" change device icon to Hybrid Range Extender
						if (denPersonality=="HRE"){
						denImage.src='images/hybrid-range-extender-no-title.png'

                      // If XML value is "Client" change device icon to Hybrid Client
						}else if (denPersonality=="Client"){
						denImage.src='images/hybrid-client-no-title.png'	  
						} 
						// DEN END//
						
                        
						
						
                        
						//TV1 DEVICE ON START //
                     //Create varibles to assign XML values to//
						var livingRoomDevice=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S31");
						var tv1PassFail=(livingRoomDevice[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
                      // if tv1PassFail equals "Pass" cover Living Room (TV1) button with HD Supported panel. //
						if (tv1PassFail=="Pass"){
						HDOnFunc("livingHD");
						}else{
                      
                     // if tv1PassFail equals "Pass" cover Living Room button with HD Supported Panel. //
						TweenMax.to(livingNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
                      //Create varibles to assign XML values to check//
						//var livingRoomDevice=xmlDoc.getElementsByTagName("LivingRoom-HyFi-S31");
						var livingRoomPersonality=(livingRoomDevice[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
                      // If XML value is "HRE" change device icon to Hybrid Range Extender
						if (livingRoomPersonality=="HRE"){
						livingImage.src='images/hybrid-range-extender-no-title.png'
						
                      // If XML value is "Client" change device icon to Hybrid Client
						}else if (livingRoomPersonality=="Client"){
						livingImage.src='images/hybrid-client-no-title.png'	
						}
						// LIVINGROOM END//
						
                        
						
						
                        
						// TV4 DEVICE ON START //
						//Create varibles to assign XML values to//
						var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S31");
						var KitchenPassFail=(tv4Device[i].getElementsByTagName("PassFail")[0].childNodes[0].nodeValue);
						
						// if kitchenRoomPassFail equals "Pass" cover kitchen Room (TV1) button with HD Supported panel. //
						if (KitchenPassFail=="Pass"){
						HDOnFunc("kitchenHD");
						}else{
						TweenMax.to(kitchenNotSupported, .5, {css:{left:238, alpha:1}, delay:0, ease:Expo.easeOut});		
						};
						
						// if kitchenRoomPassFail equals "Pass" cover kitchen Room button with HD Supported Panel. //
						//var tv4Device=xmlDoc.getElementsByTagName("Kitchen-HyFi-S31");
						var kitchenPersonality=(tv4Device[i].getElementsByTagName("CHOSENPERSONALITY")[0].childNodes[0].nodeValue);
						
						// If XML value is "HRE" change device icon to Hybrid Range Extender
						if (kitchenPersonality=="HRE"){
						kitchenImage.src='images/hybrid-range-extender-no-title.png'
						
						// If XML value is "Client" change device icon to Hybrid Client
						}else if (kitchenPersonality=="Client"){
						kitchenImage.src='images/hybrid-client-no-title.png'	
						} 
						// KITCHEN END//
                        
						
						
				
                      //Load Heat Maps
						heatMapContainer.src='images/individual_floor_maps/Scenario31_HyFi_FirstFloor.jpg'
						heatMapContainer2.src='images/individual_floor_maps/Scenario31_HyFi_SecondFloor.jpg'
						heatMapContainer3.src='images/individual_floor_maps/Scenario31_HyFi_ThirdFloor.jpg'
						
						//Fade in Heat Maps
						TweenMax.to(heatMapContainer, 1, {css:{alpha:.7}});
						TweenMax.to(heatMapContainer2, 1, {css:{alpha:.7},delay:.3});
						TweenMax.to(heatMapContainer3, 1, {css:{alpha:.7},delay:.6});
						
						//Set Scenerio Number
						scenario = "hyfi5_31";
						
						//Animate Gauge on Side and Overhead View
						TweenMax.to(obj, .5, {value:condition31c, roundProps:["value"], ease:Linear.easeNone, onUpdate:function() {
						output.innerHTML = obj.value;
						output2.innerHTML = obj.value;
						tl.tweenTo(condition31c);


						

