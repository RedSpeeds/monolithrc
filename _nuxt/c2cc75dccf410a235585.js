(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{183:function(e,n,t){"use strict";(function(e){t(59),t(113);var o=t(184),r=t(185),c=t(188);n.a={components:{Navbar:o.a,FooterContent:r.a,Charge:c.a},data:function(){return{search:"",settings:{punishments:{jail:{max:30}}},categories:{criminal:"Criminal",undefined:"Miscellaneous",traffic:"Traffic",narcotics:"Narcotics, Illicit Weapons, and Firearms",conduct:"Public Conduct"},charges:[{name:"Speeding >5mph",description:"Operating a vehicle at least 5 mph above the speed limit.",category:"traffic",punishment:{fine:250}},{name:"Speeding >10mph",description:"Operating a vehicle at least 10 mph above the speed limit.",category:"traffic",punishment:{fine:500}},{name:"Excessive Speeding",description:"Driving more than 20mph over the speed limit.",category:"traffic",punishment:{jail:8,fine:2e3}},{name:"Damaged vehicle",description:"Operating a damaged or non-functional vehicle.",category:"traffic",punishment:{fine:500}},{name:"Fleeing from an accident",description:"It is an offence to flee from the scene of an accident.",category:"traffic",punishment:{jail:8,fine:2e3}},{name:"Driving Under the Influence",description:"Operate a vehicle whilst under the influence of alcohol or drugs use.",category:"traffic",keywords:"dui dwi",punishment:{jail:8,fine:2500}},{name:"Driving without license",description:"Operate a vehicle without possessing the relevant, valid license required to operate it",category:"traffic",punishment:{jail:8,fine:2e3}},{name:"Driving on incorrect side",description:"Using a vehicle on the incorrect side of the road.",keywords:"lane",category:"traffic",punishment:{fine:500}},{name:"Disobeying signs/failure to give way",description:"Disobeying traffic signs, or not giving way to other road users when required",category:"traffic",punishment:{fine:1e3}},{name:"Parking fully on a sidewalk",description:"If obstructing emergency or vital services, $2,000, otherwise $1,000.",category:"traffic",punishment:{special:"Depends on location"}},{name:"Reckless Endangerment",description:"Driving in a way that threatens and may cause death or injury to others.",category:"traffic",punishment:{jail:8,fine:2e3}},{name:"Reckless Driving",description:"Driving without due consideration for pedestrians or other road users.",category:"traffic",punishment:{jail:8,fine:2e3}},{name:"Aggravated Driving",description:"Driving whilst enrage or whilst under emotional pressure or stress.",category:"traffic",punishment:{jail:8,fine:1e3}},{name:"Failure to Comply",description:"Not complying with any traffic signals or instructions from a law enforcement officer.",category:"traffic",punishment:{fine:2e3}},{name:"Failure to Give Way",description:"You must give way to oncoming traffic if your side of the road is obstructed.",category:"traffic",punishment:{fine:1e3}},{name:"Overtaking on wrong side",description:"Overtaking a vehicle on the right-hand side.",category:"traffic",punishment:{fine:1500}},{name:"Tinted windows",description:"Vehicle with fully-tinted windows (no see-through from outside).",category:"traffic",punishment:{fine:600}},{name:"Possession of illegal narcotics or contraband",description:"Having drugs, substances exclusive to the production of drugs, or contraband.",category:"narcotics",punishment:{jail:8,fine:2e3}},{name:"Possession of masks/zipties",description:"Commiting a crime having masks and/or zipties.",category:"narcotics",punishment:{jail:8,fine:2e3}},{name:"Possession (Class A)",description:"Possession of a heavy weapon: machine guns, assault rifles, sniper rifles, shotguns, etc.",category:"narcotics",punishment:{jail:9,fine:3e3}},{name:"Possession with Intent (Class A)",description:"Possession of a heavy weapon while supplying/selling or intending to supply/sell",category:"narcotics",punishment:{jail:15,fine:3500}},{name:"Possession with Intent (Class A)",description:"Possession of a heavy weapon while supplying/selling or intending to supply/sell.",category:"narcotics",punishment:{jail:15,fine:3500}},{name:"Possession (Class B)",description:"Possession of a handgun. Only if unlicensed or used while commiting a crime.",category:"narcotics",punishment:{jail:12,fine:2e3}},{name:"Possession with Intent (Class B)",description:"Possession of a handgun while supplying/selling or intending to supply/sell.",category:"narcotics",punishment:{jail:12,fine:2e3}},{name:"Possession (Class C)",description:"Possession of an offensive weapon. This includes a physical item or tool, or blade. (Only if they were used in a crime as they are legal item by default)",category:"narcotics",punishment:{jail:3,fine:1e3}},{name:"Possession with Intent (Class C)",description:"Possession of an illegal offensive weapon while supplying/selling or intending to supply/sell.",category:"narcotics",punishment:{jail:6,fine:1500}},{name:"Brandishing (Class A)",description:"Brandishing of a heavy weapon. (add appropiate possession charges)",category:"narcotics",punishment:{fine:1500}},{name:"Brandishing (Class B)",description:"Brandishing of a handgun. (add appropiate possession charges)",category:"narcotics",punishment:{fine:1200}},{name:"Brandishing (Class C)",description:"Brandishing of an offensive weapon. (add appropiate possession charges)",category:"narcotics",punishment:{fine:500}},{name:"Usage (Class A)",description:"Usage of a heavy weapon. (add appropiate possession and brandishing charges)",category:"narcotics",punishment:{fine:1500}},{name:"Usage (Class B)",description:"Unlawful usage of a handgun. (add appropiate possession and brandishing charges)",category:"narcotics",punishment:{fine:1200}},{name:"Usage (Class C)",description:"Unlawful usage of an offensive weapon. (add appropiate possession and brandishing charges)",category:"narcotics",punishment:{fine:500}},{name:"Possession of a Narcotic Substance",description:"Possession of any amount of illegal substance or narcotics.",category:"narcotics",keywords:"drug",punishment:{jail:8,fine:2e3}},{name:"Possession with Intent (narcotic)",description:"ossession of any amount of illegal substance or narcotics while supplying/selling or intending to supply/sell.",keywords:"drug",category:"narcotics",punishment:{jail:15,fine:2500}},{name:"Minor Possession of Narcotic",keywords:"drug",description:"Possession of 2 bags or less of marijuana or cocaine",category:"narcotics",punishment:{special:"Seizure"}},{name:"Armed Robbery",description:"As Robbery, however with the use of a firearm or an offensive weapon to assist.",category:"criminal",punishment:{jail:23}},{name:"Armed Assault",description:"As Assault, however with the use of a firearm or an offensive weapon to assist.",category:"criminal",punishment:{jail:23}},{name:"Purchasing Illegal Object",description:"Firearm/weapon/narcotic/contraband.",category:"criminal",punishment:{jail:6}},{name:"Smuggling Illegal Object",description:"Firearm/weapon/narcotic/contraband.",category:"criminal",punishment:{jail:9}},{name:"Assault",description:"Show intent or attempting to create offensive contact with a person (doesn't involve physical contact).",category:"criminal",punishment:{jail:8}},{name:"Battery",description:"Causing harmful or some form of offensive contact, which would be certain to occur, or has occurred.",category:"criminal",punishment:{jail:12}},{name:"Aggravated Assault",description:"Using a deadly weapon to cause serious injury.",category:"criminal",punishment:{jail:15}},{name:"Vehicular Assault",description:"Causing harm against someone with the reckless use of a motor vehicle.",category:"criminal",punishment:{jail:12}},{name:"Actual Bodily Harm",description:"Causing injury to another, such as bruising, causing a black eye, broken teeth etc.",keywords:"abh",category:"criminal",punishment:{jail:9}},{name:"Grievous Bodily Harm",description:"Causing significant injury to another, which would result in long treatment or a level of incapacity (broken limbs etc.).",keywords:"gbh",category:"criminal",punishment:{jail:15}},{name:"Torture",description:"Intentionally causing severe physical or psychological pain or injury to someone who is being restrained physically, or someone who is not in a position to defend against the actions being forced upon them.",category:"criminal",punishment:{jail:15}},{name:"First-degree Murder",description:"Intentionally taking the life of another, which is premeditated.",category:"criminal",punishment:{jail:23}},{name:"Second-degree Murder",description:"Intentionally taking the life of another, however which is not planned prior.",category:"criminal",punishment:{jail:18}},{name:"Attempted Murder",description:"Intentionally attempting to take the life of another, in any capacity.",category:"criminal",punishment:{jail:12}},{name:"Manslaughter",description:"Not intentionally taking the life of another, however killing them via acts of negligence without intent.",category:"criminal",punishment:{jail:9}},{name:"Murder of a Law Enforcement Officer",description:"Intentionally taking the life of a LEO, Regardless of if it was premeditated or not.",keywords:"LEO",category:"criminal",punishment:{jail:27}},{name:"Attempted Murder of a Law Enforcement Officer",description:"Attempting to take the life of a law enforcement officer, in any capacity.",keywords:"LEO",category:"criminal",punishment:{jail:15}},{name:"Robbery",description:"Forcefully, or threatening to forcefully take/attempt to take property of another against their will, in a violent manner.",category:"criminal",punishment:{jail:8}},{name:"Burglary",description:"Entering a property such as a house or building with the intent or purpose to commit an offence.",category:"criminal",punishment:{jail:12}},{name:"Embezzlement",description:"Dishonestly, and purposefully withholding an asset with the intent to use for their own usage. The asset will have been entrusted by the true owner of the asset.",category:"criminal",punishment:{jail:6}},{name:"Fraud",description:"Intentionally using false information, or using deception to secure personal gain in an unfair or unlawful manner. This also includes creating falsified evidence in the court of law.",category:"criminal",punishment:{jail:8}},{name:"Counterfeiting",description:"Creating false money, or goods in order to deceive another person, or for personal gain.",category:"criminal",punishment:{jail:9}},{name:"Grand Theft Auto",description:"Attempting to, or successfully stealing a vehicle.",keywords:"gta",category:"criminal",punishment:{jail:15}},{name:"Bank Robbery",description:"Theft of money, or bullion from a bank, for any sum of money.",keywords:"raid",category:"criminal",punishment:{jail:38}},{name:"Extortion",description:"Obtaining a service, money or asset by forcing someone physically, or threatening them to do so, against their will.",category:"criminal",punishment:{jail:9}},{name:"Kidnapping",description:"Forcefully transporting or moving a person away against their will.",category:"criminal",punishment:{jail:23}},{name:"False Imprisonment",description:"Holding or restraining a person in a restricted area against their consent, or without any justification.",category:"criminal",punishment:{jail:12}},{name:"Treason",description:"This includes participating in war against your own native country, attempting to overthrow the government, spying on the government or relative agencies, or attempting to kill the head of state.",category:"criminal",punishment:{jail:60}},{name:"Espionage",description:"Obtaining a secret, confidential or restricted data without consent from the holder of the information.",category:"criminal",punishment:{jail:45}},{name:"Obstruction of justice",description:"Obstructing, or conspiring to obstruct the course of justice.",category:"criminal",punishment:{jail:15}},{name:"Aiding and Abetting",description:"Assisting in commissioning and the committing of any criminal offence,including hiding a fugitive or assisting in escape or hiding.",category:"criminal",punishment:{special:"Half of original sentence"}},{name:"Conspiracy to Commit a Crime",description:"The act of conspiring or declaring that you intend to do a criminal act or other violation of the law.",category:"criminal",punishment:{jail:8,fine:2e3}},{name:"Prison Break",description:"To breach or break from prison, to allow or assist someone to do so, or escape from being detained.",keywords:"jail",category:"criminal",punishment:{jail:15}},{name:"Terrorism",description:"Acts of terrorism, such as causing mass panic or injury/death.",category:"criminal",punishment:{jail:60}},{name:"Rioting",description:"5 or more persons who are using, or threatening to use violence for a mutual purpose between them.",category:"conduct",punishment:{jail:8}},{name:"Violent Disorder",description:"2-4 persons who are using, or threatening to use violence for a mutual purpose between them.",category:"conduct",punishment:{jail:8}},{name:"Affray",description:"Fighting 1 or more other persons in a public area with intent to cause terror to bystanders.",category:"conduct",punishment:{jail:9}},{name:"Unlawful Provocation",description:"Threatening, using offensive or insulting language, or abusive behavior towards another person. Using signs or written displays to do the same.",category:"conduct",punishment:{jail:3,fine:2e3}},{name:"Harassment/Causing Undue Distress",description:"Unlawful provocation occuring on two or more occasions.",category:"conduct",punishment:{jail:5,fine:3e3}},{name:"Disturbing the Peace",description:"Causing unnecessary stress or tension, using humiliating, abusive or threatening behavior, to other people in a public or private place.",category:"conduct",punishment:{jail:3,fine:1500}},{name:"Public Farming",description:"Any farming located on land that you do not own directly or have express provable permission from the (current) owner of the land to farm on.",category:"conduct",punishment:{fine:1e3}},{name:"Unauthorized Access",description:"Causing damage to, or accessing restricted or private property without proper consent or justification.",category:"conduct",punishment:{fine:2e3,jail:5}},{name:"Trespassing",description:"Trespassing private/government/restricted property/assets or a crime-scene.",category:"conduct",punishment:{fine:2e3,jail:8}},{name:"Criminal Damage",description:"Damaging government/private/restricted property/assets.",category:"conduct",punishment:{fine:1500,jail:3}},{name:"Resisting Arrest",description:"Causing an obstruction, or using physical force to prevent yourself from being detained.",category:"conduct",punishment:{jail:8}},{name:"Fleeing (Foot) - Evading/Evasion",description:"Attempting to escape on foot, from law enforcement when they are exhibiting signs for you to stop and surrender.",keywords:"pursuit chase",category:"conduct",punishment:{jail:6}},{name:"Fleeing (Vehicle)- Evading/Evasion",description:"Attempting to escape in a vehicle, from law enforcement when they are exhibiting signs for you to stop and surrender.",keywords:"pursuit chase",category:"conduct",punishment:{jail:9}},{name:"Failure to Comply",description:"Failing to meet the command or orders from law enforcement.",category:"conduct",punishment:{jail:3,fine:2e3}},{name:"Failure to Provide Identification",description:"Failing to present valid legal documentation when requested.",category:"conduct",punishment:{fine:1e3}},{name:"Wasting Government Resources",description:"Using the 911 line to deceive emergency services, or to leave illegitimate messages.",keywords:"hoax calling false",category:"conduct",punishment:{fine:2e3,jail:3}},{name:"Disorderly Conduct Under Influence",description:"To act disorderly under the influence of alcohol, in a public place.",category:"conduct",punishment:{fine:1e3}},{name:"Impersonating Public Officials",description:"To impersonate a government employee or government official. (This includes Certified Lawyers)",category:"conduct",punishment:{fine:3e3,jail:9}},{name:"Attempting to Bribe",description:"To attempt to, or to bribe a government employee or government official in return for information, reduced imprisonment or to be relieved of criminal charges.",category:"conduct",punishment:{fine:2e3,jail:8}},{name:"Unlicensed Alcohol Business",description:"Selling alcohol without the relevant licensing.",category:"conduct",punishment:{fine:2e3}}]}},computed:{filteredCharges:function(){var n=this,t={};return t=""===n.search?n.charges:n.charges.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.search.toLowerCase().trim())||(!(!e.hasOwnProperty("description")||-1===e.description.toLowerCase().indexOf(n.search.toLowerCase().trim()))||!(!e.hasOwnProperty("keywords")||-1===e.keywords.toLowerCase().indexOf(n.search.toLowerCase().trim())))})),e.groupBy(t,"category")}},head:function(){return{title:"Law Enforcement Punishment Lookup - Monolith RC"}}}}).call(this,t(186))},184:function(e,n,t){"use strict";var o=t(22),component=Object(o.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("nav",[n("div",{staticClass:"container mx-auto p-4 mt-2 flex items-center"},[n("nuxt-link",{attrs:{to:"/"}},[n("svg",{staticClass:"h-10 w-48 fill-current text-white",attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"1600",height:"285",viewBox:"0 0 16000 2850"}},[n("g",[n("path",{attrs:{d:"M0 1445V40h457l89 122c87 123 156 217 331 457 51 69 123 168 160 220 64 89 68 92 83 73 8-10 53-72 100-137s117-161 156-214 132-180 206-283c75-103 145-199 156-213l20-25h452v2090h-400l-2-746-3-745-335 445-334 446h-41c-35-1-43-6-66-38-33-46-253-347-282-386-21-27-78-105-257-352l-85-117-3 1107-2 1106H0V1445zM15600 2070v-780h-1010v840h-400V40h400v880h1010V40h400v2810h-400v-780zM3370 2169c-238-36-414-117-565-261-173-163-271-363-310-628-74-494 148-964 552-1169C3212 27 3384-6 3615 3c344 13 600 139 795 392 48 63 124 203 150 281 52 151 65 230 64 414-1 219-27 346-104 513-59 128-188 294-285 367-98 74-269 154-380 178-144 32-356 41-485 21zm357-375c195-45 339-157 423-329 46-95 66-169 78-290 20-199-22-380-125-537-186-285-614-364-923-170-202 127-330 425-299 697 22 203 86 351 200 466 76 77 191 139 300 163 89 19 262 20 346 0zM7870 2169c-210-32-348-87-495-196-182-135-316-351-372-599-22-100-25-438-5-524 107-441 350-706 748-817 93-26 111-27 304-27s211 1 304 27c183 51 328 132 453 254 202 197 313 480 313 798 0 335-104 603-314 810-148 147-325 234-548 269-104 17-296 19-388 5zm332-370c284-57 462-255 514-569 28-168 9-324-56-480-46-108-151-233-246-292-194-120-489-127-697-16-119 64-233 195-285 328-49 127-56 169-56 320 0 188 31 303 119 440 91 142 213 226 385 265 69 16 252 18 322 4zM4940 1085V40h329l33 43c19 23 63 78 97 122 35 44 70 89 80 100 9 11 39 49 66 85 28 36 55 70 60 76 6 6 73 91 150 189s176 224 220 279c44 56 130 164 190 241l110 139 3-637 2-637h400v2090h-249l-94-117c-51-65-131-167-177-228-46-60-89-115-95-121-5-7-27-34-47-60-21-27-76-98-124-159-47-60-103-132-124-160-21-27-77-99-124-160-48-60-103-132-124-159-20-26-42-53-48-60-5-6-29-36-52-66-22-30-50-66-61-80l-21-25v1395h-400V1085zM9410 1085V40h390v1720h1080v370H9410V1085zM11150 1085V40h860v2090h-860V1085zm574-215c60-31 113-81 152-146 27-45 29-57 29-149 0-113-14-152-85-229-94-102-257-129-386-64-64 32-136 113-157 178-19 58-22 157-7 210 24 85 117 181 208 215 60 23 186 15 246-15zM12890 1265V400h-660V40h1720v360h-660v1730h-400v-865z"}})])])]),this._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("span",{staticClass:"text-white pl-4 text-lg font-semibold"},[this._v("Resource Collection")])])],1)])}),[],!1,null,null,null);n.a=component.exports},185:function(e,n,t){"use strict";var o=t(22),component=Object(o.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("footer",{staticClass:"text-gray-600 container mx-auto px-4 text-xs mb-4"},[n("p",[this._v("The Monolith logo and select assets are © Thriving Ventures AB. This site is not affiliated nor endorsed by Thriving Ventures AB.")])])}],!1,null,null,null);n.a=component.exports},188:function(e,n,t){"use strict";var o={props:["charge"]},r=t(22),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"mt-2 p-4 bg-gray-800 text-white rounded"},[t("div",{staticClass:"flex "},[t("div",{staticClass:"text-lg font-semibold"},[e._v(e._s(e.charge.name))]),e._v(" "),t("div",{staticClass:"ml-2"},[e.charge.punishment.jail?t("span",{staticClass:"bg-red-700 px-2 py-1 text-xs font-semibold tracking-tight uppercase rounded-full"},[e._v("\n        "+e._s(e.charge.punishment.jail)+" "),t("span",{staticClass:"text-xs"},[e._v("years")])]):e._e(),e._v(" "),e.charge.punishment.jail&&e.charge.punishment.fine?t("span",{staticClass:"uppercase px-1 text-xs font-semibold text-gray-500"},[e._v("or")]):e._e(),e._v(" "),e.charge.punishment.fine?t("span",{staticClass:"bg-gray-700 px-2 py-1 text-xs font-semibold tracking-tight uppercase rounded-full"},[e._v("\n        "+e._s(e._f("currency")(e.charge.punishment.fine))+"\n      ")]):e._e(),e._v(" "),e.charge.punishment.special?t("span",{staticClass:"bg-gray-700 px-2 py-1 text-xs font-semibold tracking-tight uppercase rounded-full"},[e._v("\n        "+e._s(e.charge.punishment.special)+"\n      ")]):e._e()])]),e._v(" "),t("p",{staticClass:"text-gray-500 truncate"},[e._v("\n    "+e._s(e.charge.description)+"\n  ")])])}),[],!1,null,null,null);n.a=component.exports},190:function(e,n,t){"use strict";t.r(n);var o=t(183).a,r=t(22),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Navbar"),e._v(" "),t("div",{staticClass:"container mx-auto p-4"},[e._m(0),e._v(" "),t("p",{staticClass:"text-gray-100 text-xl"},[e._v("A tool to easily calculate fine or jail time amounts based on the charges.")]),e._v(" "),t("div",{staticClass:"text-white"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"bg-gray-800 focus:outline-none focus:shadow-outline border border-gray-700 rounded-lg mt-4 py-2 px-4 block w-full appearance-none leading-normal",attrs:{autofocus:"true",placeholder:"Search charges...",type:"text"},domProps:{value:e.search},on:{input:function(n){n.target.composing||(e.search=n.target.value)}}}),e._v(" "),t("div",{staticClass:"mt-1"},e._l(e.filteredCharges,(function(n,o){return t("div",{staticClass:"mt-2"},[t("span",{staticClass:"block py-2 sticky top-0 bg-gray-900 uppercase font-bold tracking-tight text-gray-400"},[e._v(e._s(e.categories[o]))]),e._v(" "),e._l(n,(function(e){return t("div",[t("Charge",{attrs:{charge:e}})],1)}))],2)})),0)])]),e._v(" "),t("FooterContent")],1)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"flex items-center"},[n("h1",{staticClass:"font-semibold text-3xl text-white"},[this._v("\n        Law Enforcement Punishment Lookup\n      ")]),this._v(" "),n("div",{staticClass:"ml-2"},[n("span",{staticClass:"inline-block uppercase text-sm font-semibold bg-blue-700 text-white py-1 px-2 rounded-full"},[this._v("Beta")])])])}],!1,null,null,null);n.default=component.exports}}]);