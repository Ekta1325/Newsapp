import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    // articles=[
    //         {
    //         "source": {
    //         "id": "engadget",
    //         "name": "Engadget"
    //         },
    //         "author": "Mariella Moon",
    //         "title": "GM's Cruise is making its own chips for self-driving vehicles to save on costs",
    //         "description": "GM's Cruise division doesn't want to rely on third-party manufacturers for the chips powering its autonomous vehicles — so, it's making its own. Based on what Carl Jenkins, the company's VP for Hardware Engineering, told Reuters, the main motivator for the sw…",
    //         "url": "https://www.engadget.com/gm-cruise-making-its-own-chips-self-driving-vehicles-051402952.html",
    //         "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/b765a1f0-33e2-11ed-bd3f-80c48b9eb2ac",
    //         "publishedAt": "2022-09-14T05:14:02Z",
    //         "content": "GM's Cruise division doesn't want to rely on third-party manufacturers for the chips powering its autonomous vehicles so, it's making its own. Based on what Carl Jenkins, the company's VP for Hardwar… [+1954 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": "reuters",
    //         "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Apple plans to use latest chip tech by Taiwan's TSMC in iPhones, Macs - Nikkei - Reuters",
    //         "description": "Apple Inc <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a> is planning to use an updated version of Taiwanese chipmaker TSMC's <a href=\"https://www.reuters.com/companies/2330.TW\" target=\"_blank\">(2330.TW)</a> latest chip produci…",
    //         "url": "https://www.reuters.com/technology/apple-plans-use-latest-chip-tech-by-taiwans-tsmc-iphones-macs-nikkei-2022-09-14/",
    //         "urlToImage": "https://www.reuters.com/resizer/8AjPVh09ANOl6jaT3h77Mjr03pw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/P6C3URGBJNNGJLM4GIALXDKXZI.jpg",
    //         "publishedAt": "2022-09-14T03:46:00Z",
    //         "content": "Sept 14 (Reuters) - Apple Inc (AAPL.O) is planning to use an updated version of Taiwanese chipmaker TSMC's (2330.TW) latest chip producing technology in iPhones and Macbooks next year, the Nikkei Asi… [+1043 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": "reuters",
    //         "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "EU court's Wed ruling on record $4.4 bln Google fine may set precedent - Reuters",
    //         "description": "A ruling on Wednesday by Europe's General Court on whether Alphabet's <a href=\"https://www.reuters.com/companies/GOOGL.O\" target=\"_blank\">(GOOGL.O)</a> Google should face a record EU antitrust fine of 4.34 billion euro ($4.4 billion) for using its Android mob…",
    //         "url": "https://www.reuters.com/technology/eu-courts-wed-ruling-record-44-bln-google-fine-may-set-precedent-2022-09-14/",
    //         "urlToImage": "https://www.reuters.com/resizer/Jfw_mrKxYmdx8Wp3Dd9F7fXGWcs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XY3WCFQPUBOWBBIYPEG3RSHYBY.jpg",
    //         "publishedAt": "2022-09-14T05:08:00Z",
    //         "content": "LUXEMBOURG, Sept 14 (Reuters) - A ruling on Wednesday by Europe's General Court on whether Alphabet's (GOOGL.O) Google should face a record EU antitrust fine of 4.34 billion euro ($4.4 billion) for u… [+2555 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": "reuters",
    //         "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "U.S. to discuss new chips bill with Taiwan next month - Reuters",
    //         "description": "The United States will hold talks with Taiwan next month to discuss new U.S. legislation designed to boost the American semiconductor industry, the top U.S. diplomat in Taipei said on Wednesday.",
    //         "url": "https://www.reuters.com/technology/us-discuss-new-chips-bill-with-taiwan-next-month-2022-09-14/",
    //         "urlToImage": "https://www.reuters.com/resizer/p16SIuGdtym5jZTyQrF1O_M5ytM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4FINBFAXIZOGHD3RZIIAI2B3ZA.jpg",
    //         "publishedAt": "2022-09-14T04:04:00Z",
    //         "content": "TAIPEI, Sept 14 (Reuters) - The United States will hold talks with Taiwan next month to discuss new U.S. legislation designed to boost the American semiconductor industry, the top U.S. diplomat in Ta… [+2247 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": "reuters",
    //         "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Google's long battle with EU antitrust regulators - Reuters",
    //         "description": "Google suffered one of its biggest setbacks on Wednesday after Europe's second-top court upheld an EU antitrust decision against the Alphabet <a href=\"https://www.reuters.com/companies/GOOGL.O\" target=\"_blank\">(GOOGL.O)</a> company for using its Android mobil…",
    //         "url": "https://www.reuters.com/technology/googles-long-battle-with-eu-antitrust-regulators-2022-09-14/",
    //         "urlToImage": "https://www.reuters.com/resizer/scjAXtPv66G8PnqjMiaUfViG5Ug=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ETLBLFSZIZLJ3JRIKQZSLJKTLA.jpg",
    //         "publishedAt": "2022-09-14T09:31:00Z",
    //         "content": "LUXEMBOURG, Sept 14 (Reuters) - Google suffered one of its biggest setbacks on Wednesday after Europe's second-top court upheld an EU antitrust decision against the Alphabet (GOOGL.O) company for usi… [+4412 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //         },
    //         "author": "Arwa Mahdawi",
    //         "title": "Celebrities, let me fix this for you – you’re not ‘humbled’ to win something, you are ‘honoured’ | Arwa Mahdawi",
    //         "description": "If you can’t tell the difference, I have a horrible punishment in mind for you – whether you’re the boss of Apple TV or the president of the USHope you have got some sensible shoes on because I am about to take you on a hike up a hill I am prepared to die on.…",
    //         "url": "https://amp.theguardian.com/commentisfree/2022/sep/14/celebrities-let-me-fix-this-for-you-youre-not-humbled-to-win-something-you-are-honoured",
    //         "urlToImage": "https://i.guim.co.uk/img/media/19d8a38fa8f1da050f36fe39ebad89e9f44a5f89/0_100_6134_3680/master/6134.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=b4fe0e2c65ba2b2dc5f738446b19e866",
    //         "publishedAt": "2022-09-14T06:00:07Z",
    //         "content": "Hope you have got some sensible shoes on because I am about to take you on a hike up a hill I am prepared to die on. Ready? Here we go: anyone who uses the word humbled when they really mean honoured… [+1790 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //         },
    //         "author": "Jess Cartner-Morley",
    //         "title": "Bring on the colour! Autumn fashion to keep you warm, cheer you up and wear for ever",
    //         "description": "As the summer fades, lift your mood with Barbie pink, vibrant greens, warm chocolates and bold heathersI know what you’re thinking. Why should you care about fashion at a time like this? The country is in mourning. We are heading into a grim winter with an un…",
    //         "url": "https://amp.theguardian.com/fashion/2022/sep/14/bring-on-the-colour-autumn-fashion-to-keep-you-warm-cheer-you-up-and-wear-for-ever",
    //         "urlToImage": "https://i.guim.co.uk/img/media/c14dff4b2057784425c463f59943cd5611ae139c/0_0_3295_1978/master/3295.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d5acc8b5befefd5261b0831c7771afca",
    //         "publishedAt": "2022-09-14T05:00:06Z",
    //         "content": "I know what youre thinking. Why should you care about fashion at a time like this? The country is in mourning. We are heading into a grim winter with an untested prime minister. Autumns water-cooler … [+8445 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "heise online"
    //         },
    //         "author": "Ben Schwan",
    //         "title": "Apples Oktober-Event: Was bei der nächsten Keynote zu erwarten ist",
    //         "description": "Die iPhone- und Apple-Watch-Keynote ist vorbei, doch schon nächsten Monat soll es eine weitere Apple-Veranstaltung geben. Was wir erwarten – und was nicht.",
    //         "url": "https://www.heise.de/news/Apples-Oktober-Event-Was-bei-der-naechsten-Keynote-zu-erwarten-ist-7260962.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/7/0/5/7/tim_cook_sep22-a8b9a4b7034395f9.png",
    //         "publishedAt": "2022-09-14T07:44:00Z",
    //         "content": "Bei Apple ist gerade die wichtigste Zeit des Jahres angebrochen: Vergangene Woche wurden die neuen iPhone-14-Modelle und die neuen Apple-Watch-Geräte Series 8 und Ultra vorgestellt, in dieser Woche k… [+3574 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "heise online"
    //         },
    //         "author": "Florian Pillau, mit Material der dpa",
    //         "title": "Elektroauto: Apple-Mitgründer Wozniak mag Teslas Touchscreen-Bedienung nicht",
    //         "description": "\"Woz\" kritisiert die Touchscreen-Bedienung in Autos. Echte Tasten wären ihm lieber. Wegen der Probleme mit seinem Tesla habe er nun einen Mercedes bestellt.",
    //         "url": "https://www.heise.de/news/Elektroauto-Apple-Mitgruender-Wozniak-mag-Teslas-Touchscreen-Bedienung-nicht-7263294.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/8/1/3/8/4n3gbidf-e09ec472a0681109.jpg",
    //         "publishedAt": "2022-09-14T08:48:00Z",
    //         "content": "Steve Wozniak, Mitbegründer von Apple, hält wenig von der Touchscreen-Bedienung in Autos. Auf dem Kölner Kongress Digital X sagte er, dass er dabei Probleme mit seinem Tesla habe. Er müsse immer wied… [+963 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "heise online"
    //         },
    //         "author": "Ben Schwan",
    //         "title": "Spiele: \"Quake\" auf der Apple Watch, Zocken auf der Dynamic Island",
    //         "description": "Ein Dev hat das Original-\"Quake\" auf Apples Computeruhr portiert. Die Framerate ist gar nicht schlecht. Eine weitere Gaming-Neuerung betrifft das iPhone 14 Pro.",
    //         "url": "https://www.heise.de/news/Spiele-Quake-auf-der-Apple-Watch-Zocken-auf-der-Dynamic-Island-7260993.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/7/0/7/4/quake_watch-66e0474249816fc7.png",
    //         "publishedAt": "2022-09-14T08:52:00Z",
    //         "content": "Die Apple Watch hat mittlerweile eine durchaus beachtliche Prozessor- und Grafikleistung. Das hat nun ein Entwickler demonstriert und ein klassisches 3D-Spiel auf die Computeruhr portiert. Parallel d… [+2439 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "9to5Mac"
    //         },
    //         "author": "Filipe Espósito",
    //         "title": "Apple VP of Health Dr. Sumbul Desai to attend Web Summit 2022 in Lisbon",
    //         "description": "Apple VP of Healthcare Dr. Sumbul Desai, who is known for her appearances at Apple keynotes, will attend Web Summit 2022 in Lisbon, Portugal later this year. For those unfamiliar, Web Summit is an annual conference that is considered to be one of the biggest …",
    //         "url": "https://9to5mac.com/2022/09/13/apple-vp-health-sumbul-desai-web-summit-2022/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/02/apple-health-dr-sumbul-desai.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2022-09-14T02:30:16Z",
    //         "content": "Apple VP of Healthcare Dr. Sumbul Desai, who is known for her appearances at Apple keynotes, will attend Web Summit 2022 in Lisbon, Portugal later this year. For those unfamiliar, Web Summit is an an… [+1976 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "9to5Mac"
    //         },
    //         "author": "Seth Kurkowski",
    //         "title": "9to5Mac Daily: September 13, 2022 – Apple Watch Ultra battery details, more",
    //         "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\nSponsored by Urban Armor Gear…",
    //         "url": "https://9to5mac.com/2022/09/13/9to5mac-daily-september-13-2022-apple-watch-ultra-battery-details-more/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2022-09-14T00:02:51Z",
    //         "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+911 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "9to5Mac"
    //         },
    //         "author": "Filipe Espósito",
    //         "title": "iPhone 14 models reportedly shipping with earlier version of iOS 16",
    //         "description": "Apple on Monday released iOS 16 to all users after months of beta testing. The build released to the public this week is the same build made available to developers a week ago as the Release Candidate (RC). However, according to a new report, iPhone 14 models…",
    //         "url": "https://9to5mac.com/2022/09/13/iphone-14-shipping-with-earlier-version-of-ios-16/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-14-sales.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2022-09-14T00:32:36Z",
    //         "content": "Apple on Monday released iOS 16 to all users after months of beta testing. The build released to the public this week is the same build made available to developers a week ago as the Release Candidat… [+1715 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "9to5Mac"
    //         },
    //         "author": "Benjamin Mayo",
    //         "title": "iOS 16: How to set different wallpaper for iPhone home screen and lock screen",
    //         "description": "iOS 16 adds a bunch of new options for setting your wallpaper and customizing your lock screen, with the ability to pick dynamic astronomy and weather backgrounds, emoji art, photo album shuffles, add widgets, and more. But one thing that isn’t so easy anymor…",
    //         "url": "https://9to5mac.com/2022/09/14/ios-16-how-to-different-wallpaper-iphone-home-screen-lock-screen/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iphone-home-screen-lock-screen-settings.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2022-09-14T08:25:50Z",
    //         "content": "iOS 16 adds a bunch of new options for setting your wallpaper and customizing your lock screen, with the ability to pick dynamic astronomy and weather backgrounds, emoji art, photo album shuffles, ad… [+3187 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Wikihow.com"
    //         },
    //         "author": "Natasha Miller",
    //         "title": "How to Throw a Surprise Party",
    //         "description": "Does a person you like have a big event coming up that deserves a surprise party? Excellent. Time for some serious, secret planning. But to make sure it goes off without a hitch, you've got to be sneaky. The best surprise parties are well thought-out, involve…",
    //         "url": "https://www.wikihow.com/Throw-a-Surprise-Party",
    //         "urlToImage": "https://www.wikihow.com/images/4/4b/Throw-a-Surprise-Party-Step-16-Version-2.jpg",
    //         "publishedAt": "2022-09-14T00:00:00Z",
    //         "content": "This article was co-authored by Natasha Miller. Natasha Miller is an Event Planner, Chief Experience Designer, and President of Entire Productions, an event and entertainment production company based… [+706 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "AppleInsider"
    //         },
    //         "author": "news@appleinsider.com (Amber Neely)",
    //         "title": "Apple's Dr. Sumbul Desai to speak at Web Summit 2022",
    //         "description": "Apple's vice president of health, Dr. Sumbul Desai, is heading to Lisbon, Portugal to speak at Web Summit 2022.Dr Sumbul DesaiDr. Desai will attend the conference to speak on \"Apple's bold vision for healthcare.\" Read more...",
    //         "url": "https://appleinsider.com/articles/22/09/14/apples-dr-sumbul-desai-to-speak-at-web-summit-2022",
    //         "urlToImage": "https://photos5.appleinsider.com/gallery/48024-93816-000-lead-Dr-Sumbul-Desai-xl.jpg",
    //         "publishedAt": "2022-09-14T02:59:46Z",
    //         "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+717 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Gizmodo.jp"
    //         },
    //         "author": "はらいさん",
    //         "title": "AppleCare +未加入の場合、Apple Watch Ultraの修理代は7万円越えに…",
    //         "description": "シリーズ史上最もタフで最もデカいApple Watch Ultraですが、本体価格（124,800円）が高ければ、修理代も高額でした。",
    //         "url": "https://www.gizmodo.jp/2022/09/apple-watch-ultra-apple-care-plus.html",
    //         "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/13/applewatch_ultra-w960.jpg",
    //         "publishedAt": "2022-09-14T02:00:00Z",
    //         "content": "Series 81\r\nApple Watch Ultra124,800\r\nApple Watch Ultra\r\nApple Watch UltraApple Care +75,800...\r\nApple Care + for Apple Watch10,700\r\nApple Watch\r\nSource: MacRumors"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Gizmodo.jp"
    //         },
    //         "author": "小暮ひさのり",
    //         "title": "iPhone 14シリーズのバッテリー容量、1機種だけ少なくなっているモデルがある！",
    //         "description": "毎年iPhone発売時期になると気になってくる「今年のiPhoneのバッテリー容量」の話題。iPhone 14、iPhone 14 Proは昨年より微増していますが、iPhone 14 Pro Maxはわずかにですが減っています。",
    //         "url": "https://www.gizmodo.jp/2022/09/iphone-14-series-battery.html",
    //         "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/13/2022-09-13ipbk00-w960.jpg",
    //         "publishedAt": "2022-09-14T02:30:00Z",
    //         "content": "iPhoneiPhone\r\nApple\r\nMacRumorsiPhone 14\r\niPhone14 3,279mAh\r\niPhone 14 Plus 4,325mAh\r\niPhone 14 Pro 3,200mAh\r\niPhone 14 Pro Max: 4,323mAh\r\niPhone 13\r\niPhone 13 mini 2,406mAh\r\niPhone13 3,227mAh\r\niPhone… [+209 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Gizmodo.jp"
    //         },
    //         "author": "そうこ",
    //         "title": "それ、Androidが先にやってたよって言いたくなるiPhone 14の新機能7つ（でも、Appleの方がやり方は上手い？）",
    //         "description": "iPhone 14シリーズが発表され、欲しい人たちの予約ピリピリも終わり、今は待つだけの楽しい時。常時表示ディスプレイやDynamic Islandなど、楽しみな新機能がたくさんあります。が、発表を見てAndroidユーザーの中には思った人もいるはず…「それ、こっちが先にやってたよ」って。",
    //         "url": "https://www.gizmodo.jp/2022/09/apple-iphone-14-android-dynamic-island-esim-proraw.html",
    //         "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/13/220913iphone14android-w960.jpg",
    //         "publishedAt": "2022-09-14T07:00:00Z",
    //         "content": "iPhone 14Dynamic IslandAndroid\r\nImage: David Nield\r\nSamsungONGalaxy Note 72016Note 7AMOLEDS PenSamsungGoogleOnePlusONAndroid\r\nAppleApple\r\nPhoto: Sam Rutherford / Gizmodo\r\nAndroid120Hz\r\nOnePlus 9 Pro1… [+607 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Applesfera.com"
    //         },
    //         "author": "David Bernal Raspall",
    //         "title": "La batería del Apple Watch Ultra podría durar mucho más de 36 horas. Esto es lo que dice Apple al respecto",
    //         "description": "Todos nos hemos quedado asombrados por la enorme duración de la batería de los nuevos Apple Watch Ultra. Una duración de 36 horas que podría ir mucho más allá, pues Apple tiene en cuenta una cantidad de horas de conectividad celular que tienen un importante i…",
    //         "url": "https://www.applesfera.com/apple-watch/bateria-apple-watch-ultra-podria-durar-mucho-36-horas-esto-que-dice-apple-al-respecto",
    //         "urlToImage": "https://i.blogs.es/742221/hero/840_560.jpeg",
    //         "publishedAt": "2022-09-14T08:04:49Z",
    //         "content": "Todos nos hemos quedado asombrados por la enorme duración de la batería de los nuevos Apple Watch Ultra. Una duración de 36 horas que podría ir mucho más allá, pues Apple tiene en cuenta una cantidad… [+1825 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Applesfera.com"
    //         },
    //         "author": "Miguel López",
    //         "title": "Los 3nm ya tienen pronósticos más concretos: estarán en los chips A17 y M3 según Nikkei",
    //         "description": "Parte de la responsabilidad del mayor rendimiento de los chips A16 Bionic de los iPhone 14 Pro respecto al de sus predecesores radica en que sus transistores han pasado a medir 4nm, 1nm menos. Eso hace que quepan más transistores en un mismo espacio, lo que a…",
    //         "url": "https://www.applesfera.com/rumores/3nm-tienen-pronosticos-concretos-estaran-chips-a17-m3-nikkei",
    //         "urlToImage": "https://i.blogs.es/7ba472/m3/840_560.jpeg",
    //         "publishedAt": "2022-09-14T09:02:26Z",
    //         "content": "Parte de la responsabilidad del mayor rendimiento de los chips A16 Bionic de los iPhone 14 Pro respecto al de sus predecesores radica en que sus transistores han pasado a medir 4nm, 1nm menos. Eso ha… [+1206 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Applesfera.com"
    //         },
    //         "author": "Jesús Quesada",
    //         "title": "Cinco ordenadores Mac de oferta en el outlet de MediaMarkt: desde el versátil MacBook Air hasta el potentísimo Mac Studio",
    //         "description": "Si estás inmerso en el ecosistema de Apple, en los diferentes perfiles de MediaMarkt en eBay podremos encontrar chollos y rebajas interesantes en dispositivos de la manzana mordida. Lo hemos visto habitualmente en los iPhone, pero también hay AirPods u ordena…",
    //         "url": "https://www.applesfera.com/seleccion/cinco-ordenadores-mac-oferta-outlet-mediamarkt-versatil-macbook-air-potentisimo-mac-studio",
    //         "urlToImage": "https://i.blogs.es/6ef93e/mac-ofertas/840_560.jpg",
    //         "publishedAt": "2022-09-14T06:01:57Z",
    //         "content": "Si estás inmerso en el ecosistema de Apple, en los diferentes perfiles de MediaMarkt en eBay podremos encontrar chollos y rebajas interesantes en dispositivos de la manzana mordida. Lo hemos visto ha… [+2967 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Applesfera.com"
    //         },
    //         "author": "David Bernal Raspall",
    //         "title": "Qué modelos de iPhone pueden mostrar la batería en la barra de estado con iOS 16. Apple confirma que son estos",
    //         "description": "Uno de los cambios de iOS 16, además de la personalización de la pantalla de bloqueo, es la posibilidad de ver el porcentaje de batería de nuestro iPhone directamente en la barra de estado del mismo. Un cambio que se introdujo en una de las betas de este vera…",
    //         "url": "https://www.applesfera.com/iphone/que-modelos-iphone-pueden-ver-bateria-barra-estado-apple-confirma-que-estos",
    //         "urlToImage": "https://i.blogs.es/295469/1366_2000/840_560.jpeg",
    //         "publishedAt": "2022-09-14T06:19:57Z",
    //         "content": "Uno de los cambios de iOS 16, además de la personalización de la pantalla de bloqueo, es la posibilidad de ver el porcentaje de batería de nuestro iPhone directamente en la barra de estado del mismo.… [+1396 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Theregister.com"
    //         },
    //         "author": "Simon Sharwood",
    //         "title": "Red Hat lets staff stay away from the office forever",
    //         "description": "It works for the FOSS community, but Red Hat's version adds an 'office vibe' and desk-free ‘neighborhoods’\nIBM's FOSS unit, Red Hat, has revealed its staff don't need to come back to the office – ever. But if they do, they'll find collaborative \"neighborhoods…",
    //         "url": "https://www.theregister.com/2022/09/14/red_hat_wfh_policy/",
    //         "urlToImage": "https://regmedia.co.uk/2015/11/04/redhat-azure.jpg",
    //         "publishedAt": "2022-09-14T07:04:56Z",
    //         "content": "IBM's FOSS unit, Red Hat, has revealed its staff don't need to come back to the office ever. But if they do, they'll find collaborative \"neighborhoods\" await them.\r\nNews of the policy came in a post … [+3275 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "XDA Developers"
    //         },
    //         "author": "Timi Cantisano",
    //         "title": "Apple plans to introduce new ads to the App Store by this holiday season",
    //         "description": "Apple fans might be riding the high from the iPhone 14 Pro, Apple Watch Series 8, and Apple Watch Ultra announcements. But, there is some bad news for iOS users, as it looks like Apple has solidified its plans to deliver more ads to its users through the App …",
    //         "url": "https://www.xda-developers.com/apple-app-store-will-get-more-ads-this-holiday-season/",
    //         "urlToImage": "https://www.xda-developers.com/files/2022/09/XDA-4-6.jpg",
    //         "publishedAt": "2022-09-14T01:57:55Z",
    //         "content": "Apple fans might be riding the high from the iPhone 14 Pro, Apple Watch Series 8, and Apple Watch Ultra announcements. But, there is some bad news for iOS users, as it looks like Apple has solidified… [+1876 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "XDA Developers"
    //         },
    //         "author": "Karthik Iyer",
    //         "title": "These are the best Apple iPhone 14 Plus screen protectors you can buy in 2022",
    //         "description": "Apple has finally made it possible to buy a plus-sized iPhone for under $1000. The new iPhone 14 Plus comes with a bigger display and a massive battery inside, both of which are expected to make it a popular choice among consumers this year. It does, however,…",
    //         "url": "https://www.xda-developers.com/best-apple-iphone-14-plus-screen-protectors/",
    //         "urlToImage": "https://www.xda-developers.com/files/2022/09/Apple-iPhone-14-Plus-feaetured.jpg",
    //         "publishedAt": "2022-09-14T08:51:45Z",
    //         "content": "Apple has finally made it possible to buy a plus-sized iPhone for under $1000. The new iPhone 14 Plus comes with a bigger display and a massive battery inside, both of which are expected to make it a… [+3171 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "XDA Developers"
    //         },
    //         "author": "Mahmoud Itani",
    //         "title": "These are the best Apple iPhone 14 Pro screen protectors to buy in 2022",
    //         "description": "Apple launched the iPhone 14 series during its Far Out event. This time around, the focus was on the Pro models. So if you plan to buy an iPhone 14, we advise you to choose the iPhone 14 Pro or Pro Max. The regular variants are almost unchanged iterations of …",
    //         "url": "https://www.xda-developers.com/best-apple-iphone-14-pro-screen-protectors/",
    //         "urlToImage": "https://www.xda-developers.com/files/2022/09/iPhone-14-Pro-colors.jpg",
    //         "publishedAt": "2022-09-14T08:45:51Z",
    //         "content": "Apple launched the iPhone 14 series during its Far Out event. This time around, the focus was on the Pro models. So if you plan to buy an iPhone 14, we advise you to choose the iPhone 14 Pro or Pro M… [+2662 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Android Authority"
    //         },
    //         "author": "Hadlee Simons",
    //         "title": "You told us: Here’s how you feel about a Dynamic Island on Android phones",
    //         "description": "Apple debuted a software-enhanced display cutout dubbed the Dynamic Island, but here's what readers think about it coming to Android.",
    //         "url": "https://www.androidauthority.com/dynamic-island-android-phones-poll-results-3208628/",
    //         "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2022/09/A-Dynamic-Island-triptych-on-the-iPhone-14-Pro.jpg",
    //         "publishedAt": "2022-09-14T09:27:20Z",
    //         "content": "Apples iPhone 14 Pro models finally ditched the wide notch of prior models in favor of two cutouts dubbed the Dynamic Island. The two cutouts are actually bridged by software, and tapping the area al… [+3043 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Krebs on Security"
    //         },
    //         "author": "BrianKrebs",
    //         "title": "Wormable Flaw, 0days Lead Sept. 2022 Patch Tuesday",
    //         "description": "This month's Patch Tuesday offers a little something for everyone, including security updates for a zero-day flaw in Microsoft Windows that is under active attack, and another Windows weakness experts say could be used to power a fast-spreading computer worm.…",
    //         "url": "https://krebsonsecurity.com/2022/09/wormable-flaw-0days-lead-sept-2022-patch-tuesday/",
    //         "urlToImage": "https://krebsonsecurity.com/wp-content/uploads/2022/09/computerguys.png",
    //         "publishedAt": "2022-09-14T00:23:45Z",
    //         "content": "This month’s Patch Tuesday offers a little something for everyone, including security updates for a zero-day flaw in Microsoft Windows that is under active attack, and another Windows weakness expert… [+6105 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Presse-citron"
    //         },
    //         "author": "Setra",
    //         "title": "La puce A17 de l’iPhone 15 Pro fait déjà parler d’elle",
    //         "description": "Selon Nikkei, Apple équiperait les iPhone 15 Pro d’une nouvelle puce gravée en 3 nm. Cette technologie permettra une importante amélioration des performances et de l’efficacité énergétique.",
    //         "url": "https://www.presse-citron.net/la-puce-a17-de-liphone-15-pro-fait-deja-parler-delle/",
    //         "urlToImage": "https://www.presse-citron.net/app/uploads/2022/09/iphone-14-pro-gamme.jpg",
    //         "publishedAt": "2022-09-14T09:30:16Z",
    //         "content": "Alors quApple vient à peine de sortir la série iPhone 14, des rumeurs circulent déjà au sujet des puces qui seront utilisées par la firme sur les modèles de lannée prochaine. Dans un récent article, … [+2589 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Espinof.com"
    //         },
    //         "author": "Albertini",
    //         "title": "Estrenos (14 de septiembre): 88 series, películas y documentales en Netflix, HBO Max, Filmin, Disney+, Movistar Plus+, Amazon, FlixOlé y Apple TV+",
    //         "description": "Miércoles y ya sabéis lo que eso significa, al menos en cuanto al ritmo habitual de Espinof. Llega el momento de repasar los estreno que nos vamos a encontrar esta semana en streaming... y en esta ocasión son 88 las series, películas y documentales que llegan…",
    //         "url": "https://www.espinof.com/estrenos/estrenos-14-septiembre-series-peliculas-documentales-netflix-hbo-max-filmin-disney-plus-movistar-plus-amazon-flixole-apple-tv",
    //         "urlToImage": "https://i.blogs.es/5ba650/asunto-privado-estrenos/840_560.jpeg",
    //         "publishedAt": "2022-09-14T06:30:00Z",
    //         "content": "Miércoles y ya sabéis lo que eso significa, al menos en cuanto al ritmo habitual de Espinof. Llega el momento de repasar los estreno que nos vamos a encontrar esta semana en streaming... y en esta oc… [+6088 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "iMore"
    //         },
    //         "author": "heyimjoew@gmail.com (Joe Wituschek)",
    //         "title": "See how Crash Detection works on the iPhone 14 in new video",
    //         "description": "Apple has posted a new video to its Apple Support YouTube channel showing how Crash Detection works on the iPhone 14 models and new Apple Watches.",
    //         "url": "https://www.imore.com/iphone/see-how-crash-detection-works-on-the-iphone-14-in-new-video",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/ETZBeXWA8C5xbmgreqRkQe-1200-80.jpeg",
    //         "publishedAt": "2022-09-14T08:47:41Z",
    //         "content": "Ahead of the release of the iPhone 14, Apple Watch Series 8, and Apple Watch SE (second generation) on Friday, Apple has released a new video showing how Crash Detection, its new feature that will au… [+1974 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Techmeme.com"
    //         },
    //         "author": null,
    //         "title": "Sources: Apple plans to use TSMC's next 3-nm chipmaking technology for the A17 mobile processor in some of its iPhones and Macs in 2023 (Cheng Ting-Fang/Nikkei Asia)",
    //         "description": "Cheng Ting-Fang / Nikkei Asia:\nSources: Apple plans to use TSMC's next 3-nm chipmaking technology for the A17 mobile processor in some of its iPhones and Macs in 2023  —  Move will mark industry's first adoption of updated production technology  —  TAIPEI — A…",
    //         "url": "https://www.techmeme.com/220913/p50",
    //         "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3-ap-northeast-1.amazonaws.com%252Fpsh-ex-ftnikkei-3937bb4%252Fimages%252F2%252F3%252F8%252F2%252F42192832-3-eng-GB%252F%25E5%2590%258D%25E7%25A7%25B0%25E6%259C%25AA%25E8%25A8%25AD%25E5%25AE%259A%25201.jpg?width=1260&height=630&fit=cover&gravity=faces&source=nar-cms",
    //         "publishedAt": "2022-09-14T03:40:02Z",
    //         "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 11:40 PM ET, September 13, 2022.\r\nThe most current version of the site as always is available at our home page.\r\nT… [+73 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "MacRumors"
    //         },
    //         "author": "Joe Rossignol",
    //         "title": "M3 Chip for Macs and A17 Chip for iPhone 15 Pro Will Reportedly Use TSMC's Second-Generation 3nm Process",
    //         "description": "Apple's future M3 chip for Macs and A17 chip for iPhone 15 Pro models will be manufactured based on TSMC's enhanced 3nm process known as N3E next year, according to a new report from Nikkei Asia. The devices are expected to launch throughout 2023.\n\n\n\n\n\nN3E wi…",
    //         "url": "https://www.macrumors.com/2022/09/13/m3-chip-a17-chip-3nm-report/",
    //         "urlToImage": "https://images.macrumors.com/t/na4HVhc4mouDF2FPKTOTu2lM9xQ=/1810x/article-new/2021/12/m3-feature-black.jpg",
    //         "publishedAt": "2022-09-14T03:49:00Z",
    //         "content": "Apple's future M3 chip for Macs and A17 chip for iPhone 15 Pro models will be manufactured based on TSMC's enhanced 3nm process known as N3E next year, according to a new report from Nikkei Asia. The… [+963 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Les Numériques"
    //         },
    //         "author": "Guillaume Henri",
    //         "title": "Test LG Gram 16 (16Z90Q) : un grand ultrabook presque parfait",
    //         "description": "Le LG Gram 16 fait son retour avec un processeur Intel Core de 12e génération et surtout une dalle mate de 16 pouces revue et corrigée pour faire oublier la dalle brillante de la première itération. La finesse et le poids plume sont toujours au rendez-vous.",
    //         "url": "https://www.lesnumeriques.com/ordinateur-portable/lg-gram-16-16z90q-core-i7-p69949/test.html",
    //         "urlToImage": "https://cdn.lesnumeriques.com/optim/test/19/191213/85173a27-lg-gram-16__1200_630__0-244-3072-1856_wtmk.jpeg",
    //         "publishedAt": "2022-09-14T05:00:00Z",
    //         "content": "Le LG Gram 16 a conservé son châssis en magnésium qui permet de proposer à la fois légèreté et rigidité. Notre modèle arbore une robe gris anthracite du plus bel effet, surmontée dun logo gram sur le… [+8106 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Caschys Blog"
    //         },
    //         "author": "Olli",
    //         "title": "iPhone 14 Pro: Spiele zur Dynamic Island in der Mache",
    //         "description": "Das iPhone 14 Pro kommt bald zu den ersten Käufern und hat vor allem mit der Kamera und beim Display größere Updates im Gepäck. Apple ist die Notch losgeworden und hat stattdessen einen Bereich rund um den Kameraausschnitt gelegt, der...Zum Beitrag: iPhone 14…",
    //         "url": "https://stadt-bremerhaven.de/iphone-14-pro-spiele-zur-dynamic-island-in-der-mache/",
    //         "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/09/iPhone-14_.jpg",
    //         "publishedAt": "2022-09-14T05:30:47Z",
    //         "content": "Das iPhone 14 Pro kommt bald zu den ersten Käufern und hat vor allem mit der Kamera und beim Display größere Updates im Gepäck. Apple ist die Notch losgeworden und hat stattdessen einen Bereich rund … [+964 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Caschys Blog"
    //         },
    //         "author": "Olli",
    //         "title": "Unicode 15.0: Neue Emojis vorgestellt",
    //         "description": "Das Unicode Consortium hat mal wieder die Liste der neuen Emojis vorgestellt, die mit Unicode 15.0 kommen könnten. Es fehlt jedoch noch die formelle Genehmigung dafür. Insgesamt 4.489 neue Zeichen kommen mit der neuen Version dazu, unter diesen sind 20...Zum …",
    //         "url": "https://stadt-bremerhaven.de/unicode-15-0-neue-emojis-vorgestellt/",
    //         "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/09/Emojipedia-Unicode-15_0-Release-Header-Image-4.jpg",
    //         "publishedAt": "2022-09-14T06:00:06Z",
    //         "content": "Das Unicode Consortium hat mal wieder die Liste der neuen Emojis vorgestellt, die mit Unicode 15.0 kommen könnten. Es fehlt jedoch noch die formelle Genehmigung dafür. Insgesamt 4.489 neue Zeichen ko… [+1688 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Frandroid"
    //         },
    //         "author": "Ulrich Rozier",
    //         "title": "Même Xiaomi commercialise une batterie MagSafe pour iPhone",
    //         "description": "MagSafe sur iPhone, c'est simple et pratique. Voici un nouvel accessoire, une batterie externe... fabriquée par Xiaomi.Les batteries externes MagSafe, c’est très commode si vous avez un iPhone compatible. Apple propose sa propre solution, tandis qu’Anker en e…",
    //         "url": "https://www.frandroid.com/?p=1471204",
    //         "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/09/xiaomi-magsafe-1200x777.jpg",
    //         "publishedAt": "2022-09-14T07:16:30Z",
    //         "content": "MagSafe sur iPhone, c'est simple et pratique. Voici un nouvel accessoire, une batterie externe... fabriquée par Xiaomi.\r\nSource : Xiaomi\r\nLes batteries externes MagSafe, cest très commode si vous ave… [+1482 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Frandroid"
    //         },
    //         "author": "Ulrich Rozier",
    //         "title": "Transformer une vieille tablette en un système Android Automotive pour voiture",
    //         "description": "Si vous n'avez ni système d'info divertissement récent, ni le support d'Android Auto / Apple CarPlay, il y a toujours des solutions personnalisées. Voici justement un projet prometteur : l'installation d'Android Automotive sur une vieille tablette Android.L’é…",
    //         "url": "https://www.frandroid.com/?p=1471178",
    //         "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/09/android-automotive-1200x779.jpeg",
    //         "publishedAt": "2022-09-14T06:17:14Z",
    //         "content": "Si vous n'avez ni système d'info divertissement récent, ni le support d'Android Auto / Apple CarPlay, il y a toujours des solutions personnalisées. Voici justement un projet prometteur : l'installati… [+3561 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Frandroid"
    //         },
    //         "author": "Vincent Sergère",
    //         "title": "Une voiture électrique abordable et autonome, Dynamic Island copié sur Android et Samsung Galaxy S23 – Tech’spresso",
    //         "description": "Vous n’avez pas eu le temps de suivre l’actualité hier ? Voici ce qui a marqué le mardi 13 septembre : la MG4 électrique est enfin là, jusqu'à 500 km d'autonomie, la fonction Dynamic Island d'Apple copiée sur Android et le Samsung Galaxy S23 qui fait déjà par…",
    //         "url": "https://www.frandroid.com/actualites-generales/1471002_une-voiture-electrique-abordable-et-autonome-dynamic-island-copie-sur-android-et-samsung-galaxy-s23-techspresso",
    //         "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/09/xiaomi-miui-dynamic-island.jpg",
    //         "publishedAt": "2022-09-14T05:02:15Z",
    //         "content": "Vous navez pas eu le temps de suivre lactualité hier? Voici ce qui a marqué le mardi 13 septembre : la MG4 électrique est enfin là, jusqu'à 500 km d'autonomie, la fonction Dynamic Island d'Apple copi… [+1118 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": "lenta",
    //         "name": "Lenta"
    //         },
    //         "author": "Антон Похиляк",
    //         "title": "Британцы раскритиковали короля Карла III за реакцию на протекшую ручку",
    //         "description": "Читатели издания Daily Express раскритиковали короля Великобритании Карла III из-за его реакции на протекшую перьевую ручку и за то, что он забыл, «какой сегодня день». Соответствующие комментарии появились под новостью на сайте газеты. Так, несколько британц…",
    //         "url": "https://lenta.ru/news/2022/09/14/commity/",
    //         "urlToImage": "https://icdn.lenta.ru/images/2022/09/14/11/20220914112316226/share_8d5a2073f3e2788f369dec8c0bacd4cb.jpg",
    //         "publishedAt": "2022-09-14T08:44:53Z",
    //         "content": "Daily Express III - , , « ». .\r\n . « , , , ...», Greylox. , , II .\r\n« \"\", . , , . , , - !» StuartPlymouth.\r\n N1cknamed , II , , « ». , : «, , -, . ?».\r\n : « , », Wiser1. David S. : « , . , . , , , Ap… [+35 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Cnbeta.com"
    //         },
    //         "author": "study875",
    //         "title": "由于友商良率不行 三星显示额外获苹果2000万块iPhone 14面板订单",
    //         "description": "三星显示（Samsung Display）计划接收来自苹果的更多面板订单，并购买更多的生产设备以满足增长需求。苹果的 iPhone 14 Max 已经超出了公司的销售预期，由于友商的面板供应出现低良率问题，这些额外的 LTPO OLED 面板订单也转移到三星显示手中。 阅读全文",
    //         "url": "https://www.cnbeta.com/articles/tech/1316033.htm",
    //         "urlToImage": "https://static.cnbetacdn.com/thumb/article/2022/0913/19028390ff5c558.png",
    //         "publishedAt": "2022-09-14T06:36:41Z",
    //         "content": "The Elec iPhone 14 Max iPhone 14 Pro Max LTPO OLED\r\n iPhone 14 82% 1.49 1.3 \r\n iPhone 14 Pro Max AP SystemsHB Solution Philoptics\r\n LG Display LG Display iPhone 14 6%\r\n iPhone 14 Pro Max LTPO 6.7 2,0… [+17 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Ifanr.com"
    //         },
    //         "author": "何, 嘉昕",
    //         "title": "早报 | Android 版灵动岛来了/iPhone 15 或改名/马斯克炮轰燃油车/四款 iPhone 不支持电量百分比",
    //         "description": "· 恒大要求 9 月 30 日前全面复工\n· 法国新浪潮电影大师戈达尔去世#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
    //         "url": "https://www.ifanr.com/1511961",
    //         "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2022/09/0812.008.jpeg",
    //         "publishedAt": "2022-09-14T00:20:44Z",
    //         "content": "<ul><li>iPhone 15 </li><li></li><li> 9 30 </li><li></li><li>C919 </li><li></li><li>73 </li><li>Netflix </li><li> Facebook </li><li></li><li></li><li> Pixelbook</li><li> Peloton </li><li></li><li></li… [+1179 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Cnbeta.com"
    //         },
    //         "author": "study875",
    //         "title": "苹果应用内购价格同比上涨40%，主要因素或为应用追踪透明度",
    //         "description": "由于在苹果资产负债表中将 App Store 业务营收和其他服务整合起来，而且苹果调整了佣金结构，不再是全盘 30%，这使得很难从苹果提供的公开数据中向后推算，因此预估其业务规模变得愈发困难。 阅读全文",
    //         "url": "https://www.cnbeta.com/articles/tech/1315955.htm",
    //         "urlToImage": "https://static.cnbetacdn.com/article/2022/0914/4f79ab6b52ea0bd.webp",
    //         "publishedAt": "2022-09-14T03:46:36Z",
    //         "content": "App Store \r\nOrganic Growth--App Tracking Transparency, ATT\r\nOrganic Growth\r\n Apptopia App Store (IAP) 40% Google Play IAP 9% 2021 7 2022 7 \r\nApptopia 2021 ATT 2022 (eCPI) Apple ATT Adjust eCPI IAP \r\n… [+75 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Eurogamer.net"
    //         },
    //         "author": "Ed Nightingale",
    //         "title": "Triangle Strategy coming to PC next month",
    //         "description": "Square Enix's tactical RPG Triangle Strategy is on its way to PC next month.\n\nCurrently only available on Switch, the game will be available via Steam from 13th October.\n\nIf you're unfamiliar, you can check out some gameplay in the Steam announcement trailer …",
    //         "url": "https://www.eurogamer.net/triangle-strategy-coming-to-pc-next-month",
    //         "urlToImage": "https://assets.reedpopcdn.com/Triangle_Strategy_Key_Art_fp4L8b3.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/Triangle_Strategy_Key_Art_fp4L8b3.jpg",
    //         "publishedAt": "2022-09-14T09:32:32Z",
    //         "content": "Square Enix's tactical RPG Triangle Strategy is on its way to PC next month.\r\nCurrently only available on Switch, the game will be available via Steam from 13th October.\r\nIf you're unfamiliar, you ca… [+1106 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Motley Fool"
    //         },
    //         "author": "newsfeedback@fool.com (Sean Williams)",
    //         "title": "The Only Stock Warren Buffett Has Bought in Each of the Last 2 Bear Markets",
    //         "description": "Hint: It's not Apple or Chevron.",
    //         "url": "https://www.fool.com/investing/2022/09/14/only-stock-warren-buffett-buy-last-2-bear-markets/",
    //         "urlToImage": "https://g.foolcdn.com/editorial/images/700322/warren-buffett-brka-brkb-berkshire-hathaway-motley-fool2.jpg",
    //         "publishedAt": "2022-09-14T09:06:00Z",
    //         "content": "Berkshire Hathaway(BRK.A -3.32%) (BRK.B -3.54%) CEO Warren Buffett has a track record that speaks for itself. Since taking the reins as CEO of Berkshire in 1965, he's overseen the creation of nearly … [+6386 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Motley Fool"
    //         },
    //         "author": "newsfeedback@fool.com (Katie Brockman)",
    //         "title": "This 1 ETF Is My Top Recommendation for New Investors",
    //         "description": "This investment can maximize your earnings while keeping your money safe.",
    //         "url": "https://www.fool.com/investing/2022/09/14/this-1-etf-is-top-recommendation-new-investors/",
    //         "urlToImage": "https://g.foolcdn.com/editorial/images/700441/person-sitting-at-a-desk-serious-expression-using-a-laptop.jpg",
    //         "publishedAt": "2022-09-14T09:30:00Z",
    //         "content": "The stock market can be intimidating even when it's thriving, but it's especially daunting to invest during periods of volatility.\r\nStock prices have been shaky over the past several months, but the … [+3448 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Deadline"
    //         },
    //         "author": "Pete Hammond",
    //         "title": "‘The Greatest Beer Run Ever’ Toronto Review: Zac Efron In Peter Farrelly’s Wild But True Vietnam War-Set Story",
    //         "description": "Watching Peter Farrelly’s new film, The Greatest Beer Run Ever, and knowing little about it going in, I kept thinking this would be a totally absurd, beyond belief story if it isn’t one that really happened. By the end I saw it is indeed 100% true, proving li…",
    //         "url": "https://deadline.com/2022/09/the-greatest-beer-run-ever-toronto-review-zac-efron-1235118407/",
    //         "urlToImage": "https://deadline.com/wp-content/uploads/2022/09/greatest_beer_run_ever_01.jpg?w=1024",
    //         "publishedAt": "2022-09-14T01:34:46Z",
    //         "content": "Watching Peter Farrelly’s new film, The Greatest Beer Run Ever, and knowing little about it going in, I kept thinking this would be a totally absurd, beyond belief story if it isn’t one that really h… [+6717 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Digiday"
    //         },
    //         "author": "Tim Peterson",
    //         "title": "Future of TV Briefing: TV advertising’s measurement landscape remains in a state of upheaval",
    //         "description": "This week’s Future of TV Briefing checks in on where the TV advertising industry's measurement shift stands heading into the new season.",
    //         "url": "http://digiday.com/future-of-tv/future-of-tv-briefing-tv-advertisings-measurement-landscape-remains-in-a-state-of-upheaval/",
    //         "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2018/11/Tv-MeasurementArtboard-3.jpg",
    //         "publishedAt": "2022-09-14T04:01:00Z",
    //         "content": "This weeks Future of TV Briefing checks in on where the TV advertising industry’s measurement shift stands heading into the new season.Taking measure\r\nThe key hits:\r\n<ul><li>TV networks and agencies … [+10827 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "New Atlas"
    //         },
    //         "author": "Loz Blain",
    //         "title": "Review: Cardo pushes the game forward again with new Packtalk Edge",
    //         "description": "There are certain motorcyclists who are fundamentally, ideologically opposed to Bluetooth communications headsets, and indeed any other device that could muddy the pristine headspace they seek on the open road. This is a perfectly valid point of view, and pro…",
    //         "url": "https://newatlas.com/motorcycles/cardo-packtalk-edge-review/",
    //         "urlToImage": "https://assets.newatlas.com/dims4/default/683be48/2147483647/strip/true/crop/4080x2142+0+465/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F13%2F6e%2Fb35f206e46488c4291bf0a085a4b%2Fpxl-20220914-080708794.jpg&na.image_optimisation=0",
    //         "publishedAt": "2022-09-14T09:19:50Z",
    //         "content": "There are certain motorcyclists who are fundamentally, ideologically opposed to Bluetooth communications headsets, and indeed any other device that could muddy the pristine headspace they seek on the… [+8805 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Creative Bloq"
    //         },
    //         "author": "beren.neale@futurenet.com (Beren Neale)",
    //         "title": "The best iPhone 14 prices available",
    //         "description": "You can pre-order the best iPhone 14 prices available here.",
    //         "url": "https://www.creativebloq.com/deals/iphone-14-price",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/SE33N4hYGpwGWwLory546m-1200-80.jpg",
    //         "publishedAt": "2022-09-14T06:00:05Z",
    //         "content": "If you're looking for the lowest iPhone 14 prices, we've got good and bad news for you. First the bad – as the latest iPhone was only released recently, the idea that you're going to be able to get a… [+2498 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Marketingdirecto.com"
    //         },
    //         "author": "Esther Lastra",
    //         "title": "Así levanta Apple (a la chita callando) un emporio publicitario de dimensiones colosales",
    //         "description": "En los años venideros la publicidad podría reportar a Apple ingresos publicitarios valorados en nada más y nada menos que 30.000 millones de dólares.\nLa entrada Así levanta Apple (a la chita callando) un emporio publicitario de dimensiones colosales se public…",
    //         "url": "https://www.marketingdirecto.com/anunciantes-general/anunciantes/levanta-apple-emporio-publicitario",
    //         "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2022/09/apple-publicidad.jpg",
    //         "publishedAt": "2022-09-14T05:50:00Z",
    //         "content": "En los años venideros la publicidad podría reportar a Apple ingresos publicitarios valorados en nada más y nada menos que 30.000 millones de dólares.Sus primeros pinitos en el universo de la publicid… [+4642 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Andro4all.com"
    //         },
    //         "author": "JuanMi Guirado",
    //         "title": "Este OnePlus con 12 GB de RAM acaba de tocar su precio mínimo, 483 euros",
    //         "description": "Acabamos de encontrar una de las mejores compras que puedes hacer si buscabas un móvil de gama alta que te aguantara muchos años desde hoy y que tuviera un rendimiento sobresaliente. La gama alta de OnePlus tiene uno de sus exponentes en el OnePlus 9RT, una v…",
    //         "url": "https://andro4all.com/ofertas/este-oneplus-con-12-gb-de-ram-acaba-de-tocar-su-precio-minimo-483-euros",
    //         "urlToImage": "https://andro4all.com/hero/2022/09/OnePlus-9RT.jpg?width=1200&aspect_ratio=1200:631",
    //         "publishedAt": "2022-09-14T08:30:50Z",
    //         "content": "14/09/2022 10:30Acabamos de encontrar una de las mejores compras que puedes hacer si buscabas un móvil de gama alta que te aguantara muchos años desde hoy y que tuviera un rendimiento sobresaliente. … [+3560 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Impress.co.jp"
    //         },
    //         "author": null,
    //         "title": "ドコモ、「Apple Watch Series 8」の発売を延期",
    //         "description": "NTTドコモは、「Apple Watch Series 8」の発売日を延期することを発表した。当初の発売日は9月16日。延期後の発売日は、決まり次第、案内される。",
    //         "url": "https://k-tai.watch.impress.co.jp/docs/news/1440006.html",
    //         "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1440/006/01.jpg",
    //         "publishedAt": "2022-09-14T08:53:35Z",
    //         "content": "NTTApple Watch Series 8916"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Appbank.net"
    //         },
    //         "author": "岩佐",
    //         "title": "iPhone 14 Plusの発売が「1ヶ月遅れている」理由",
    //         "description": "Appleは、9月16日からiPhone 14シリーズを発売する予定です。しかし、6.7インチの「iPhone 14 Plus」については、発売が一ヶ月近く遅れています。この理由について、テック系メディア「Cult Of […]",
    //         "url": "https://www.appbank.net/2022/09/14/technology/2295754.php",
    //         "urlToImage": "https://www.appbank.net/wp-content/uploads/2022/09/2022-0914-iPhone-14-plus-thumb-1.jpeg",
    //         "publishedAt": "2022-09-14T02:23:32Z",
    //         "content": "Apple916iPhone 146.7iPhone 14 PlusCult Of Mac\r\n*Category\r\n Technology*SourceCult of Mac ,Apple\r\niPhone 14 PlusPro Max6.7Pro\r\niPhone 14 Plus2,778×1,284458ppiProMotion\r\n107Apple\r\nApple\r\nEL6iPhone 14 Pl… [+66 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Appbank.net"
    //         },
    //         "author": "岩佐",
    //         "title": "iPhone 14は買うな！ 次世代「iPhone 15」こそ〝本命〟と言える決定的理由",
    //         "description": "先日発表した「iPhone 14」シリーズに続き、Appleは2023年に「iPhone 15」シリーズを発売されると予測されています。このシリーズに搭載される新チップについて、早くもリーク情報が登場しています。 *Ca […]",
    //         "url": "https://www.appbank.net/2022/09/14/technology/2296100.php",
    //         "urlToImage": "https://www.appbank.net/wp-content/uploads/2022/09/2022-0914-iPhone-15-thumb-1.jpeg",
    //         "publishedAt": "2022-09-14T08:48:26Z",
    //         "content": "iPhone 14Apple2023iPhone 15\r\n*Category\r\n Technology*SourceNikkei Asia ,Wcfftech ,@technizoconcept\r\nAppleiPhone 14ProA16 BionicA16 BionicTSMC4nm\r\nAppleTSMC3nmNikkei AsiaA17 Bionic23nm\r\nTSMC23nmN3EA17 … [+227 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Howtoforge.com"
    //         },
    //         "author": "Till Brehm",
    //         "title": "How to Add an Email Account in ISPConfig 3.2",
    //         "description": "This tutorial shows you step-by-step how to create an email account in ISPConfig and which data to use in your email client to access this mailbox. The tutorial also includes instructions as a video at the end of the guide.",
    //         "url": "https://www.howtoforge.com/ispconfig-email-account/",
    //         "urlToImage": "https://www.howtoforge.com/images/featured/ispconfig-mailbox.png",
    //         "publishedAt": "2022-09-14T07:20:37Z",
    //         "content": "ISPConfig is a Hosting Control Panel that can be used to host websites, provide access by FTP and SSH, manage and provide email services, and run a DNS server. ISPConfig supports Debian, CentOS, and … [+8058 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Ijunkie.com"
    //         },
    //         "author": "Dave Johnson",
    //         "title": "Developer Creates Dynamic Island Game for iPhone 14 Pro",
    //         "description": "A clever developer recently shared a Dynamic Island game concept for the iPhone 14 Pro lineup, suggesting that more similar innovations might follow.  Since Apple is opening Dynamic Island feature to third-party apps, developers are already experimenting with…",
    //         "url": "https://ijunkie.com/developer-creates-dynamic-island-game-for-iphone-14-pro/",
    //         "urlToImage": "https://ijunkie.com/wp-content/uploads/2022/09/Screenshot-2022-09-14-at-8.12.06-AM.png",
    //         "publishedAt": "2022-09-14T07:17:52Z",
    //         "content": "Developer Creates Dynamic Island Game for iPhone 14 Pro\r\nA clever developer recently shared a Dynamic Island game concept for the iPhone 14 Pro lineup, suggesting that more similar innovations might … [+2069 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Nextpit.de"
    //         },
    //         "author": "Jade Bryan",
    //         "title": "Apple erhöht die Kosten: Batterietausch wird teurer!",
    //         "description": "Der Austausch des Akkus beim iPhone 14 oder Pro ist teurer als beim iPhone 13 und kostet ohne AppleCare+ Plan rund 119 Euro. Mehr Infos in den News!(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
    //         "url": "https://www.nextpit.de/apple-erhoeht-die-kosten-batterietausch-wird-teurer",
    //         "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Apple_Event_2022/Screenshot_2022-09-07_at_20.11.33.png",
    //         "publishedAt": "2022-09-14T09:03:34Z",
    //         "content": "Wenn Ihr vorhabt, Euer geliebtes iPhone 14 (Plus) oder iPhone 14 Pro (Max) länger als ein Jahr zu behalten, solltet Ihr unbedingt daran denken, dass Ihr deutlich mehr zahlen müsst, um den abgenutzten… [+1705 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": "el-mundo",
    //         "name": "El Mundo"
    //         },
    //         "author": "JAVIER ATTARD, SANTIAGO OSPITAL",
    //         "title": "Giro en la guerra de Putin: ¿Qué está pasando en Rusia?",
    //         "description": "¿Cómo de presente está la guerra en el día a día de Rusia? ¿Empiezan a escucharse críticas... estamos ante una ruptura del discurso oficial o una revuelta ultra? ¿Le tienen...",
    //         "url": "https://www.elmundo.es/podcasts/el-mundo-al-dia/2022/09/14/6320fc2ffdddffcd1c8b45b1.html",
    //         "urlToImage": "https://phantom-elmundo.unidadeditorial.es/264a43c2d776e861ea660e0a5772894e/resize/1200/f/jpg/assets/multimedia/imagenes/2022/09/13/16631061476203.jpg",
    //         "publishedAt": "2022-09-14T00:55:10Z",
    //         "content": "¿Cómo de presente está la guerra en el día a día de Rusia? ¿Empiezan a escucharse críticas... estamos ante una ruptura del discurso oficial o una revuelta ultra? ¿Le tienen miedo los rusos a Putin?\r\n… [+491 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "DIE WELT"
    //         },
    //         "author": "Florian Sädler",
    //         "title": "So reagiert die Ampel auf die Kritik am Bürgergeld",
    //         "description": "Zwei Jahrzehnte nach ihrer umstrittenen Einführung werden die Hartz-Reformen des Arbeitsmarktes selbst reformiert. Herauskommen soll das Bürgergeld – das in seiner Ausgestaltung ebenfalls nicht unumstritten ist. WELT-Wirtschaftsredakteur Jan Klauth erklärt de…",
    //         "url": "https://www.welt.de/podcasts/kick-off/article241029919/Das-ist-der-aktuelle-Stand-beim-Buergergeld-Podcast.html",
    //         "urlToImage": "https://img.welt.de/img/podcasts/kick-off/mobile238519607/7941359117-ci16x9-w1200/DWO-Podcast-Teaser-KickOffPolitik-Saedler-fb.jpg",
    //         "publishedAt": "2022-09-14T02:53:40Z",
    //         "content": "Abonnieren Sie den Podcast unter anderem bei Spotify, Apple Podcasts, Amazon Music oder direkt per RSS-Feed.\r\nUkraine-Krieg, Ampelregierung und Corona jeden Morgen gibt es neue Schlagzeilen. Im tägli… [+776 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "DIE WELT"
    //         },
    //         "author": "Diana Pieper, Jan Klauth",
    //         "title": "Sinnvolle Neuordnung oder „fatale Wegmarke“? Frust über Heils Bürgergeld",
    //         "description": "Der Entwurf von Arbeitsminister Heil (SPD) zum neuen Bürgergeld sieht einen höheren Regelsatz und eine Schonphase vor, bevor Sanktionen gegen Arbeitslose erfolgen. Scharfe Kritik wird von Arbeitgeber- und von Sozialverbänden laut. Völlig offen: Wie soll das G…",
    //         "url": "https://www.welt.de/politik/deutschland/article241035723/Buergergeld-ersetzt-Hartz-IV-Sinnvolle-Neuordnung-oder-fatale-Wegmarke.html",
    //         "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile241035741/2341357587-ci16x9-w1200/DWO-Teaser-Buergergeld-jb-jpg.jpg",
    //         "publishedAt": "2022-09-14T07:01:16Z",
    //         "content": "Als neues Gesicht für den Sozialstaat lobt Arbeitsminister Hubertus Heil (SPD) das Projekt, das das Ende von Hartz IV endgültig besiegeln soll. Einen schlechten Witz nennt dagegen der Hauptgeschäftsf… [+7513 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Techbang.com"
    //         },
    //         "author": "WL.",
    //         "title": "M2 版 MacBook Air 評測及選購建議：與 M1 版差在哪裡？規格該怎麼搭配？",
    //         "description": "蘋果全新的MacBook Air迎來15年來的最大改變，除了搭載最新的M2晶片外，外型也走向MacBook Pro相同的設計語言，可以說是新晶片加上新機構的全新組合。蘋果全新的 MacBook Air 迎來15年來的最大改變，除了搭載最新的M2晶片外，外型也走向 MacBook Pro 相同的設計語言，可以說是新晶片加上新機構的全新組合，也開啟了 MacBook Air 的全新時代。\nM2：啟動Apple M系列晶片新時代\n蘋果在今年的春季發表會推出M2晶片，也是第二代M系列晶片的開始。回顧2020年推出首款以A…",
    //         "url": "https://www.techbang.com/posts/99643-opening-a-new-era-of-apple-macbook-air-m2-chip-plus-a-new",
    //         "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/99643/original/181d547a6e4d6624676d821f0b4ca732.jpg?1662207642",
    //         "publishedAt": "2022-09-14T06:30:00Z",
    //         "content": "MacBook Air 15M2 MacBook Pro  MacBook Air \r\nM2Apple M\r\nM2M2020ArmM1M1 ProM1 MaxM1 UltraM1 UltraM2Mac MacBook M2M1 MacBook Pro 13 MacBook Air\r\nM150 %\r\nM2System-on-a-chipSoC CPUGPU M1\r\n5200M116025%M2 C… [+3547 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Ghacks Technology News"
    //         },
    //         "author": "Ashwin",
    //         "title": "Apple releases Safari 16 for macOS Monterey and Big Sur",
    //         "description": "The Safari 16 update is now available for macOS Monterey and Big Sur users. Let's take a look at the new version of the web browser. What's new in Apple Safari 16 […]\nThank you for being a Ghacks reader. The post Apple releases Safari 16 for macOS Monterey an…",
    //         "url": "https://www.ghacks.net/2022/09/14/whats-new-in-apple-safari-16-update-for-macos/",
    //         "urlToImage": "https://www.ghacks.net/wp-content/uploads/2022/09/Apple-releases-Safari-16-for-macOS-Monterey-and-Big-Sur.jpg",
    //         "publishedAt": "2022-09-14T08:02:47Z",
    //         "content": "The Safari 16 update is now available for macOS Monterey and Big Sur users. Let's take a look at the new version of the web browser.\r\nWhat's new in Apple Safari 16 for macOS\r\nI mentioned a few featur… [+3242 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Ascii.jp"
    //         },
    //         "author": "ASCII",
    //         "title": "ドコモ、Apple Watch Series 8の発売日を16日から未定に",
    //         "description": "NTTドコモは、9月8日発表していた「Apple Watch Series 8」について、当初の9月16日から「発売日が決まり次第、別途お知らせいたします」に変更している。",
    //         "url": "https://weekly.ascii.jp/elem/000/004/105/4105525/",
    //         "urlToImage": "https://ascii.jp/img/2022/09/14/3419052/l/ee0342374608d3f4.jpg",
    //         "publishedAt": "2022-09-14T08:30:00Z",
    //         "content": "NTT98Apple Watch Series 8916\r\niPhone 1414 Pro14 Pro Max2Apple Watch SE916iPhone 14 Ultra107Apple Watch Ultra923"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Ascii.jp"
    //         },
    //         "author": "ASCII",
    //         "title": "Midjourneyで突然Twitterがイラストまみれに！",
    //         "description": "AIが画像を生成するサービス「Midjourney」が話題となり、多くのユーザーがTwitterにイラスト画像を投稿しています。",
    //         "url": "https://weekly.ascii.jp/elem/000/004/105/4105265/",
    //         "urlToImage": "https://ascii.jp/img/2022/09/13/3418066/l/0a2d92aae2724fba.jpg",
    //         "publishedAt": "2022-09-14T09:00:00Z",
    //         "content": "Prime Video2500\r\n(c)Amazon Studios\r\nTwitter\r\n202283196PC\r\n<table><tr><th>PC8/319/6</th></tr><tr><th></th><th></th><th></th></tr><tr><th>1</th><td>Dell</td><td>517865</td></tr><tr><th>2</th><td>Amazon… [+760 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Businessinsider.de"
    //         },
    //         "author": "Barbara Barkhausen",
    //         "title": "Patreon entlässt 80 Mitarbeiter, Büro in Berlin wird geschlossen",
    //         "description": "Inzwischen haben mehr als 600 Techfirmen weltweit Personalabbau angekündigt. Außerdem: Börsenschock für die sechs größten US-Techkonzerne.",
    //         "url": "https://www.businessinsider.de/gruenderszene/business/entlassungen-patreon-buero-berlin-geschlossen/",
    //         "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2022/09/GettyImages-1232306493.jpg?ver=1663120905",
    //         "publishedAt": "2022-09-14T03:55:00Z",
    //         "content": "Inzwischen haben mehr als 600 Techfirmen weltweit Personalabbau angekündigt. Außerdem: Börsenschock für die sechs größten US-Techkonzerne und Gewinnwarnung bei About You. \r\nGuten Morgen! Während ihr … [+6337 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Forbes"
    //         },
    //         "author": "Dennis Mitzner, Contributor, \n Dennis Mitzner, Contributor\n https://www.forbes.com/sites/dennismitzner/",
    //         "title": "Self-Checkouts, IoT And The Rise Of Retail Cyber Security Threats",
    //         "description": "Cyber security threats are a rising concern for retail companies as they increasingly adopt self-checkouts through Apple, Google Pay or other payment platforms. Since 2005, retailers have seen over 10,000 data breaches, mainly due to flaws and vulnerabilities…",
    //         "url": "https://www.forbes.com/sites/dennismitzner/2022/09/14/self-checkouts-iot-and-the-rise-of-retail-cyber-security-threats/",
    //         "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6321847ea8de4c170be9950d/0x0.jpg?format=jpg&crop=2619,1473,x0,y135,safe&width=1200",
    //         "publishedAt": "2022-09-14T07:39:25Z",
    //         "content": "Cyber security threats are a rising concern for retail companies as they increasingly adopt self-checkouts through Apple, Google Pay or other payment platforms. Since 2005, retailers have seen over 1… [+7716 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Hdblog.it"
    //         },
    //         "author": "HDblog.it",
    //         "title": "iPhone 14 Pro Max si mostra nei primi video hands-on: Dynamic Island in azione",
    //         "description": "I primi video che violano l'embargo di Apple ci mostrano la nuova Dynamic Island in azione",
    //         "url": "https://www.hdblog.it/smartphone/articoli/n560889/iphone-14-pro-max-video-hands-on/",
    //         "urlToImage": "https://hd2.tudocdn.net/1057713?w=1920",
    //         "publishedAt": "2022-09-14T06:29:00Z",
    //         "content": "Mancano ormai poche ore all'embrargo delle prime recensioni internazionali dedicate ai nuovi iPhone 14 Pro e 14 Pro Max, ma sembra che le prime unità siano già anche in mano a chi non ha alcun vincol… [+1515 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Techinsider.ru"
    //         },
    //         "author": "Никита Шевцев",
    //         "title": "Intel показала, насколько Thunderbolt 5 на самом деле мощный: это колоссальная скорость",
    //         "description": "Intel продемонстрировала свою технологию Thunderbolt 5 следующего поколения во время технологического тура в Израиле. Скорость передачи данных при этом составила 80 Гбит/с.",
    //         "url": "https://www.techinsider.ru/gadgets/news-1556179-intel-pokazala-naskolko-thunderbolt-5-na-samom-dele-moshchnyy-eto-kolossalnaya-skorost/",
    //         "urlToImage": "https://images.techinsider.ru/upload/img_cache/ff4/ff4b26d324ca5ebe7455735a5d5fc6b1_ce_719x479x0x0_cropped_719x376.jpg",
    //         "publishedAt": "2022-09-14T05:35:00Z",
    //         "content": "Intel  Thunderbolt 5.  ,  , Intel . \r\n  Thunderbolt  .   , , Intel (, ,  80 / )   - (PAM).\r\n80 /     USB4 2.0, 80 /   . , USB-C   , ,  Intel Thunderbolt 5   .\r\nThunderbolt       ,        .  ( ),   , … [+105 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "ComputerBase"
    //         },
    //         "author": "Nicolas La Rocco",
    //         "title": "TSMC N3E: Apple nutzt optimierte 3-nm-Fertigung für A17 und M3",
    //         "description": "Seit längerer Zeit wird Apple als erster Abnehmer von TSMCs 3-nm-Fertigung gehandelt. Aus dem asiatischen Raum wird das Gerücht abermals untermauert. Demnach soll der A17 den optimierten N3E-Prozess nutzen. Der neue Node könnte erneut den Pro-Modellen vorbeha…",
    //         "url": "https://www.computerbase.de/2022-09/tsmc-n3e-apple-nutzt-optimierte-3-nm-fertigung-fuer-a17-und-m3/",
    //         "urlToImage": "https://pics.computerbase.de/1/0/5/0/1/0-8b4dd7a560ef8c22/article-1280x720.aeb5950e.jpg",
    //         "publishedAt": "2022-09-14T08:50:00Z",
    //         "content": "Seit längerer Zeit wird Apple als erster Abnehmer von TSMCs 3-nm-Fertigung gehandelt. Aus dem asiatischen Raum wird das Gerücht abermals untermauert. Demnach soll der A17 den optimierten N3E-Prozess … [+2682 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Thegospelcoalition.org"
    //         },
    //         "author": "Rebecca Lankford",
    //         "title": "Love Your Young Adult Neighbor",
    //         "description": "While it can be easy to assume that young adults are fine on our own, don’t be fooled. We’re in desperate need of the church’s hospitality, wisdom, and grace.",
    //         "url": "https://www.thegospelcoalition.org/article/love-young-adult/",
    //         "urlToImage": "https://media.thegospelcoalition.org/wp-content/uploads/2022/09/02184055/loving-young-adult.jpg",
    //         "publishedAt": "2022-09-14T04:03:00Z",
    //         "content": "Is anyone else really lonely? A pause lingered in the room before the first response: Yeah, I am. Pretty soon, the me toos and same heres began rolling. My brave friends question came as we gathered … [+6308 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Antyweb.pl"
    //         },
    //         "author": "Kamil Świtalski",
    //         "title": "Użytkownicy nie chcą dużych, drogich, iPhone'ów 14. Zainteresowanie mniejsze niż 13 mini",
    //         "description": "Apple w tym roku zrezygnowało z małego smartfona w ofercie, zamiast tego zarówno modele standardowy oraz Pro sprzedają w dużych wersjach. Ale iPhone 14 Plus nie okazał się hitem na jaki liczyli, twierdzi znany analityk.\n \n The post Użytkownicy nie chcą dużych…",
    //         "url": "https://antyweb.pl/iphone-14-plus-preordery-brak-zainteresowania",
    //         "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2022/09/yxw2mhrlib/14.jpg",
    //         "publishedAt": "2022-09-14T09:22:29Z",
    //         "content": "Zamówienia przedpremierowe na iPhone 14 oraz iPhone 14 Pro ruszyy w ubiegym tygodniu, a ju w ten pitek premiera nowych smartfonów. Jak wiadomo - nowe telefony Apple kosztuj krocie i podwyki z roku na… [+2933 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Antyweb.pl"
    //         },
    //         "author": "Kamil Pieczonka",
    //         "title": "Ferrari Purosangue - 725 KM, silnik V12 i bagażnik niemal 500 litrów",
    //         "description": "To FUV, a nie SUV\nSUV to skrót od Sport Utility Vahicle, ale według Ferrari model Purosangue jest tak nietypowy i przełomowy, że stworzył własną kategorię - FUV - Ferrari Utility Vahicle. To pewnie część historii, która ma uzasadnić wysoką cenę tego modelu, k…",
    //         "url": "https://antyweb.pl/ferrari-purosangue-v12-725km-suv",
    //         "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2022/09/wzjjnu5sfk/New-Ferrari-Purosangue-SUV-2022-11.jpg",
    //         "publishedAt": "2022-09-14T08:26:52Z",
    //         "content": "To FUV, a nie SUV\r\nSUV to skrót od Sport Utility Vahicle, ale wedug Ferrari model Purosangue jest tak nietypowy i przeomowy, e stworzy wasn kategori - FUV - Ferrari Utility Vahicle. To pewnie cz hist… [+3486 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Esuteru.com"
    //         },
    //         "author": "htmk702",
    //         "title": "オクトパストラベラー、ブレイブリーデフォルト開発チームによるRPG『バリアスデイライフ』PS4/スイッチ/Steamで順次配信！Apple Arcadeのスマホタイトルが家庭用に移植",
    //         "description": "オクトパストラベラー、ブレイブリーデフォルト開発チームによるRPG『バリアスデイライフ』PS4/スイッチ/Steamで順次配信！Apple Arcadeのスマホタイトルが家庭用に移植の記事ページ",
    //         "url": "http://blog.esuteru.com/archives/9938651.html",
    //         "urlToImage": "https://livedoor.blogimg.jp/hatima/imgs/5/3/53a02888.jpg",
    //         "publishedAt": "2022-09-14T09:00:41Z",
    //         "content": "×RPGPS4/Switch/Steam\r\nPS4/Switch/Steam\r\nNintendo Switch2022913Steam2022914PlayStation42022916\r\n×RPG\r\n3,850\r\nSteam\r\nNintedo SwitchSteam20221017"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Tecmundo.com.br"
    //         },
    //         "author": "Carlos Palmeira",
    //         "title": "10 notícias de tecnologia para você começar o dia (14/09)",
    //         "description": "Bom dia! Separamos as principais notícias do mundo da Ciência e Tecnologia para você saber tudo o que aconteceu na última terça-feira (13). Para conferir cada notícia na íntegra, basta clicar nos links a seguir.1. Apple vende iPhone 14 por R$ 4 mil ao mês em …",
    //         "url": "https://www.tecmundo.com.br/internet/247663-10-noticias-tecnologia-voce-comecar-dia-14-09.htm",
    //         "urlToImage": "https://tm.ibxk.com.br/2022/09/13/13200212893368.jpg",
    //         "publishedAt": "2022-09-14T06:00:00Z",
    //         "content": "Bom dia! Separamos as principais notícias do mundo da Ciência e Tecnologia para você saber tudo o que aconteceu na última terça-feira (13). Para conferir cada notícia na íntegra, basta clicar nos lin… [+1859 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Olhardigital.com.br"
    //         },
    //         "author": "Isabela Valukas Gusmão",
    //         "title": "Especialistas se preocupam com o aumento da quantidade de satélites na órbita da Terra",
    //         "description": "As preocupações com a quantidade de objetos encontrados na órbita da Terra não é recente. Quem costuma observar os céus, constantemente tem sua vista interrompida por um satélite. Em uma matéria publicada pelo Olhar Digital, um morador do Japão chegou a regis…",
    //         "url": "https://olhardigital.com.br/2022/09/13/ciencia-e-espaco/especialistas-se-preocupam-com-o-aumento-da-quantidade-de-satelites-na-orbita-da-terra/",
    //         "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2022/09/satelite-starlink-orbita.jpg",
    //         "publishedAt": "2022-09-14T00:09:54Z",
    //         "content": "As preocupaÃ§Ãµes com a quantidade de objetos encontrados na Ã³rbita da Terra nÃ£o Ã© recente. Quem costuma observar os cÃ©us, constantemente tem sua vista interrompida por um satÃ©lite. Em uma matÃ©… [+2129 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Actualidadiphone.com"
    //         },
    //         "author": "Karim Hmeidan",
    //         "title": "Los juegos para la Dynamic Island llegarán al iPhone 14",
    //         "description": "Los desarrolladores de juegos se preparan para aprovechar la nueva Dynamic Island para que sea protagonista de juegos.",
    //         "url": "https://www.actualidadiphone.com/los-juegos-para-la-dynamic-island-llegaran-al-iphone-14/",
    //         "urlToImage": "https://www.actualidadiphone.com/wp-content/uploads/2022/09/iPhone-14-Dinamic-Island.jpg",
    //         "publishedAt": "2022-09-14T08:00:46Z",
    //         "content": "Ya ha pasado una semana de la presentación en la que Apple nos presentó sus últimos dispositivos. Vimos el nuevo iPhone 14, el nuevo Apple Watch, los nuevos AirPods Pro, novedades que nos pusieron lo… [+1633 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "3dnews.ru"
    //         },
    //         "author": null,
    //         "title": "Apple постарается оказаться в числе первых клиентов TSMC, использующих 3-нм техпроцесс второго поколения",
    //         "description": "В текущем году TSMC освоит массовое производство 3-нм изделий первого поколения, но представленные недавно смартфоны iPhone 14 Pro и iPhone 14 Pro Max получили 4-нм процессор A16. В следующем году TSMC освоит 3-нм техпроцесс второго поколения, и Apple рассчит…",
    //         "url": "https://3dnews.ru/1074130/apple-postaraetsya-okazatsya-v-chisle-pervih-klientov-tsmc-ispolzuyushchih-3nm-tehprotsess-vtorogo-pokoleniya",
    //         "urlToImage": "https://3dnews.ru/assets/external/illustrations/2022/09/14/1074130/apple_01.jpg",
    //         "publishedAt": "2022-09-14T03:46:00Z",
    //         "content": "TSMC 3- , iPhone 14 Pro iPhone 14 Pro Max 4- A16. TSMC 3- , Apple , . A17 iPhone .\r\n: TSMC\r\nNikkei Asian Review. A17, 3- TSMC (N3E) M3 Mac. TSMC . 3- , iPad, .\r\n , Intel Apple 3- TSMC , , 3- 2024 . 3… [+41 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Geekpark.net"
    //         },
    //         "author": null,
    //         "title": "苹果或将在 App Store 加更多广告；蓝色起源首发火箭失败坠毁；Netflix《鱿鱼游戏》斩获艾美奖",
    //         "description": "9 月份游戏版号出炉，网易和腾讯皆有收获\n9 月 13 日晚，国家新闻出版署公布 9 月份国产网络游戏审批信息，共有 73 款游戏过审，其中 69 款为移动端游戏。值得一提的是，之前一直缺席的网易这次终于拿到版号，腾讯子公司南京网典科技也如愿以偿。此外，中手游、吉比特、心动、中青宝、中国移动旗下游戏公司等也都拿到了版号。\n自今年 4 月份游戏版号恢复发放以来，除 5 月份外，6 月份至 8 月份都保持一个月公布一次的节奏。截至 9 月 13 日，今年已有 314 款游戏获得版号。\n自 2018 年以来，发放的游戏…",
    //         "url": "http://www.geekpark.net/news/308212",
    //         "urlToImage": "https://imgslim.geekpark.net/uploads/image/file/e0/cf/e0cf118d741327cbe47e517a729bf19f.png",
    //         "publishedAt": "2022-09-14T00:39:00Z",
    //         "content": "9 \r\n9 13 9 73 69 \r\n 4 5 6 8 9 13 314 \r\n 2018 4 GameLook 2020 1405 2021 7 755 2022 4 \r\nApp Store \r\n9 14 App Store \r\n App Store Search7 Today Today App Store App You Might Also Like\r\n2021 680 Wamsi Moh… [+716 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "L'Express"
    //         },
    //         "author": "AFP",
    //         "title": "La justice de l'UE se prononce sur une amende record contre Google",
    //         "description": "Bruxelles - La justice européenne se prononce mercredi sur la validité d'une amende record de 4,3 milliards d'euros infligée par Bruxelles à Google pour avoir abusé de la position dominante de son système d'exploitation Android.",
    //         "url": "https://www.lexpress.fr/actualites/1/monde/la-justice-de-l-ue-se-prononce-sur-une-amende-record-contre-google_2180133.html",
    //         "urlToImage": "https://static.lexpress.fr/medias_12433/w_605,h_350,c_fill,g_north/v1663121405/le-logo-de-google-incorporant-un-portrait-de-la-reine-elizabeth-ii-le-16-octobre-2008-au-siege-londonien-de-la-compagnie_6365916.jpg",
    //         "publishedAt": "2022-09-14T02:08:52Z",
    //         "content": "Le tribunal de l'UE, basé à Luxembourg, doit publier à 9H30 (7H30 GMT) un arrêt en première instance afin de confirmer, annuler ou modifier la sanction infligée au géant américain de l'internet par l… [+2961 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Buzzorange.com"
    //         },
    //         "author": "今周刊",
    //         "title": "印度將迎來首家 Apple 實體店！為何鴻海成最大贏家、 iPhone 14 破紀錄提早量產？",
    //         "description": "【為什麼我們要挑選這篇文章】在 iPhone 14 強勢登場後，蘋果破紀錄地將於 11 月在印度量產機種，更要在明年首季迎來實體店鋪。本文將帶你了解，當 iPhone 14 被視為今年科技業「最後一根[...]\nThe post 印度將迎來首家 Apple 實體店！為何鴻海成最大贏家、 iPhone 14 破紀錄提早量產？ appeared first on TechOrange 科技報橘.",
    //         "url": "https://buzzorange.com/techorange/2022/09/14/apple-iphone-india-foxconn/",
    //         "urlToImage": "https://buzzorange.com/techorange/app/uploads/2022/09/32.jpg_1140x855.jpg",
    //         "publishedAt": "2022-09-14T07:37:08Z",
    //         "content": "iPhone 14 11 iPhone 14 \r\niPhone 14 Tim Cook \r\n 11 3 iPhone 14 Pro Max 10 11 \r\n 8 iPhone 14 85 \r\n 11 \r\n 11 iPhone 14 6 9 iPhone 13 4 \r\n TO \r\n2017 iPhone \r\n2017 10 20 iPhone 2017 iPhone\r\n iPhone 2019 1… [+359 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Tinhte.vn"
    //         },
    //         "author": "vuphanhoanglinh@gmail.com (_vphlinh_), _vphlinh_",
    //         "title": "N3E: Tiến trình chip 3nm mới của TSMC, dùng cho chip M3 và A17 trên dòng Mac và iPhone 15 Pro 2023",
    //         "description": "Theo thông tin mới từ Nikkei Asia, chip M3 và chip A17 mà Apple dự kiến trang bị trên các dòng máy Mac và dòng iPhone 15 Pro sẽ được sản xuất dựa trên tiến trình chip 3nm mới của TSMC, được gọi là N3E, giúp nâng cấp hiệu suất và hiệu năng xử lý tốt…",
    //         "url": "https://tinhte.vn/thread/n3e-tien-trinh-chip-3nm-moi-cua-tsmc-dung-cho-chip-m3-va-a17-tren-dong-mac-va-iphone-15-pro-2023.3565223/",
    //         "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6124783_Cover_M3.jpeg",
    //         "publishedAt": "2022-09-14T08:53:54Z",
    //         "content": "N3E: Tin trình chip 3nm mi ca TSMC, dùng cho chip M3 và A17 trên dòng Mac và iPhone 15 Pro 2023\r\nTheo thông tin mi t Nikkei Asia, chip M3 và chip A17 mà Apple d kin trang b trên các dòng máy Mac và d… [+620 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Challies.com"
    //         },
    //         "author": "Tim Challies",
    //         "title": "A Conversation with Alistair Begg & Bob Lepine",
    //         "description": "Last week I participated in a launch event for Seasons of Sorrow that took place just prior to the Getty Music Sing! Conference. I was blessed to have Alistair Begg and Bob Lepine participate in a discussion, then to have CityAlight and Sandra McCracken debut…",
    //         "url": "https://www.challies.com/resources/a-conversation-with-alistair-begg-bob-lepine/",
    //         "urlToImage": "https://www.challies.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-13-at-9.22.41-AM.png",
    //         "publishedAt": "2022-09-14T05:01:07Z",
    //         "content": "Last week I participated in a launch event for Seasons of Sorrow that took place just prior to the Getty Music Sing! Conference. I was blessed to have Alistair Begg and Bob Lepine participate in a di… [+1285 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Netafull.net"
    //         },
    //         "author": "コグレマサト",
    //         "title": "「Mac整備済製品」MacBook Air・MacBook Pro・Mac mini【2022年9月14日】",
    //         "description": "Appleの整備済み品は問題があって返品された商品などを整備し、テスト後認定されたものです。1年間の特別保証が付いています。 Apple公式サイトの「Mac整備済製品」の情報です。 ＼チェック／ Apple公式サイトで認...\n投稿 「Mac整備済製品」MacBook Air・MacBook Pro・Mac mini【2022年9月14日】 は ネタフル に最初に表示されました。",
    //         "url": "https://netafull.net/apple-refurbished/0119797.html",
    //         "urlToImage": "https://netafull.net/wp-content/uploads/2021/03/slproImg_202008300934050-1.jpg",
    //         "publishedAt": "2022-09-14T00:00:00Z",
    //         "content": "Apple1\r\nAppleMac\r\n13.3MacBook Air [] 8CPU7GPUApple M1 – 106,800\r\n13.3MacBook Air [] 8CPU7GPUApple M1 – 106,800\r\n13.3MacBook Air [] 8CPU7GPUApple M1 – 106,800\r\nMac mini 3.0GHz 6Intel Core i5 – []\r\n115… [+4318 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Netafull.net"
    //         },
    //         "author": "コグレマサト",
    //         "title": "「iPad整備済製品」iPad・10.5インチiPad Pro・11インチiPad Pro・12.9インチiPad Pro・iPad Air【2022年9月14日】",
    //         "description": "Appleの整備済み品は問題があって返品された商品などを整備し、テスト後認定されたものです。1年間の特別保証が付いています。 Apple公式サイトの「iPad整備済製品」の情報です。在庫限りですので、欲しいモデルがあれば...\n投稿 「iPad整備済製品」iPad・10.5インチiPad Pro・11インチiPad Pro・12.9インチiPad Pro・iPad Air【2022年9月14日】 は ネタフル に最初に表示されました。",
    //         "url": "https://netafull.net/apple-refurbished/0119799.html",
    //         "urlToImage": "https://netafull.net/wp-content/uploads/2021/02/slproImg_202008300928430-1.jpg",
    //         "publishedAt": "2022-09-14T00:15:00Z",
    //         "content": "Apple1\r\nAppleiPad\r\niPad Wi-Fi 128GB – 8[]\r\n50,800\r\niPad Wi-Fi 128GB – 8[]\r\n50,800\r\niPad Wi-Fi 128GB – 8[]\r\n50,800\r\niPad Air Wi-Fi 64GB – 4[]\r\n69,800\r\niPad Air Wi-Fi 64GB – 4[]\r\n69,800\r\niPad Air Wi-Fi… [+1602 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Sspai.com"
    //         },
    //         "author": "LiFE",
    //         "title": "从软硬协同到「不思进取」的资本：iPhone 14 Pro 对「高端产品」的启示",
    //         "description": "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...查看全文",
    //         "url": "https://sspai.com/post/75630",
    //         "urlToImage": "https://cdn.sspai.com/2022/09/08/5aba8fea58c01327bae2aff2b75d3c5d.png",
    //         "publishedAt": "2022-09-14T02:31:19Z",
    //         "content": "Matrix \r\nMatrix Matrix \r\niPhone 14 Pro \r\n 2022 Apple RealityAR iPhone Apple iPhone 14 Pro \r\niPhone 14 Pro \r\n iPhone 14 Pro \r\n iPhone 14 Pro iPhone 14 Pro \r\niPhone 14 Pro Dynamic IslandApple iPhone 3D… [+1065 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Sspai.com"
    //         },
    //         "author": "少数派编辑部",
    //         "title": "派早报：Sonos 推出 Sub Mini 无线音箱、Apple 将对未认证 AirPods 进行弹窗提醒等",
    //         "description": "Google 取消 Pixelbook 项目并解散开发团队，微信发布倡议抵制「无底线追星」等。查看全文",
    //         "url": "https://sspai.com/post/75714",
    //         "urlToImage": "article/7e9ce8e1-02af-2cad-a671-7c845196f81e.png",
    //         "publishedAt": "2022-09-14T00:57:52Z",
    //         "content": "Sonos Sub Mini \r\n9 13 Sonos Sub Mini Sub Mini 23cm 30.5cm 6.35 KG 5Ghz Wi-Fi Trueplay Sub Mini 429 10 6 \r\nApple AirPods \r\n9 12 Apple AirPods AirPods iPhoneiPad iPod touch \r\nGoogle Pixelbook \r\n The Ve… [+401 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Tinhte.vn"
    //         },
    //         "author": "vuphanhoanglinh@gmail.com (_vphlinh_), _vphlinh_",
    //         "title": "\"Hit the Island\" - Concept game giải trí với Dynamic Island trên dòng iPhone 14 Pro",
    //         "description": "Chơi game với Dynamic Island, tại sao không? Với sự xuất hiện của Dynamic Island trên dòng iPhone 14 Pro, Apple cho phép nhà phát triển ứng dụng bên thứ ba có thể tùy ý sáng tạo các trải nghiệm để tương tác với “cụm đảo” này…",
    //         "url": "https://tinhte.vn/thread/hit-the-island-concept-game-giai-tri-voi-dynamic-island-tren-dong-iphone-14-pro.3565062/",
    //         "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6124448_cover_hittheisland.jpg",
    //         "publishedAt": "2022-09-14T06:17:05Z",
    //         "content": "Chi game vi Dynamic Island, ti sao không? Vi s xut hin ca Dynamic Island trên dòng iPhone 14 Pro, Apple cho phép nhà phát trin ng dng bên th ba có th tùy ý sáng to các tri nghim tng tác vi cm o này, … [+481 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Tinhte.vn"
    //         },
    //         "author": "tieumitinhte@gmail.com (MinhTriND), MinhTriND",
    //         "title": "Lập trình viên tạo theme để đưa Dynamic Island lên điện thoại Xiaomi",
    //         "description": "Anh em còn nhớ cái thời sau khi iPhone X ra mắt không lâu, hàng loạt các thương hiệu điện thoại Android học theo? Sau 5 năm, Apple đã biến cái notch của họ tiến hóa thêm một bậc bằng 1 khái niệm mới gọi là Dynamic Island.",
    //         "url": "https://tinhte.vn/thread/lap-trinh-vien-tao-theme-de-dua-dynamic-island-len-dien-thoai-xiaomi.3564984/",
    //         "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6124702_cover-Grumpy.jpg",
    //         "publishedAt": "2022-09-14T08:52:38Z",
    //         "content": "Anh em còn nh cái thi sau khi iPhone X ra mt không lâu, hàng lot các thng hiu in thoi Android hc theo? Sau 5 nm, Apple ã bin cái notch ca h tin hóa thêm mt bc bng 1 khái nim mi gi là Dynamic Island. … [+540 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Publico.pt"
    //         },
    //         "author": "publico@publico.pt",
    //         "title": "Morreram 66 pessoas em Pedrógão e, no final, “a culpa foi da meteorologia”",
    //         "description": "",
    //         "url": "https://www.publico.pt/2022/09/14/sociedade/noticia/morreram-66-pessoas-pedrogao-final-culpa-meteorologia-2020474",
    //         "urlToImage": "https://imagens.publico.pt/imagens.aspx/1732575?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Podcasts.png",
    //         "publishedAt": "2022-09-14T05:58:00Z",
    //         "content": "Apesar das mortes registadas no grande incêndio de Pedrógão Grande, em 2017, o julgamento que decorreu no Tribunal de Leiria chegou ao fim sem atribuir responsabilidades aos onze arguidos. Neste P24 … [+272 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "CNA"
    //         },
    //         "author": null,
    //         "title": "‘Critical vulnerability’ found in Apple devices, SingCERT advises users to update for security patch",
    //         "description": "SINGAPORE: Apple users are advised to update their devices to the latest versions immediately after hackers were found actively exploiting a “critical vulnerability”, the Singapore Computer Emergency Response Team (SingCERT) said in an updated notice on Wedne…",
    //         "url": "https://www.channelnewsasia.com/singapore/apple-devices-singcert-update-critical-vulnerability-hackers-security-flaw-2937421",
    //         "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--6Vvh3Ps1--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/cna/image/2022/08/19/file_photo_of_iphone_and_macbook.jpg?itok=-1sCuAzn",
    //         "publishedAt": "2022-09-14T08:34:53Z",
    //         "content": "SINGAPORE: Apple users are advised to update their devices to the latest versions immediately after hackers were found actively exploiting a critical vulnerability, the Singapore Computer Emergency R… [+968 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Daily Beast"
    //         },
    //         "author": "Nick Schager",
    //         "title": "Zac Efron’s ‘The Greatest Beer Run Ever’ Will Leave a Bad Taste in Your Mouth",
    //         "description": "Golf Thanaporn/Apple TV+\r\nWar is hell, and so too is The Greatest Beer Run Ever, Peter Farrelly’s follow-up to 2018’s Best Picture-winning Green Book, whose glib and corny template it duplicates to dismal ends. Another 1960s-set based-on-real-events tale abou…",
    //         "url": "https://www.thedailybeast.com/obsessed/zac-efrons-the-greatest-beer-run-ever-will-leave-a-bad-taste-in-your-mouth",
    //         "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_195/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1663124831/The_Greatest_Beer_Run_Ever_Photo_0103_ztevmr",
    //         "publishedAt": "2022-09-14T03:09:21Z",
    //         "content": "War is hell, and so too is The Greatest Beer Run Ever, Peter Farrellys follow-up to 2018s Best Picture-winning Green Book, whose glib and corny template it duplicates to dismal ends. Another 1960s-se… [+6272 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Daily Beast"
    //         },
    //         "author": "The Daily Beast",
    //         "title": "‘My Son Hunter’ Isn’t Even Fun to Make Fun Of",
    //         "description": "Photo Illustration by Thomas Levinson/The Daily Beast/Getty\r\nIt’s on par with Don’t Worry Darling for being one of the most talked-about cinematic events of the fall, but just how bad is Goonies star Robert Davi’s film My Son Hunter?On this week’s episode of …",
    //         "url": "https://www.thedailybeast.com/my-son-hunter-isnt-even-fun-to-make-fun-of",
    //         "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1663130898/220913-fever-dreams-hunter-hero_lkcxh3",
    //         "publishedAt": "2022-09-14T08:13:52Z",
    //         "content": "Its on par with Dont Worry Darling for being one of the most talked-about cinematic events of the fall, but just how bad is Goonies star Robert Davis film My Son Hunter?\r\nOn this weeks episode of The… [+4155 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Seeking Alpha"
    //         },
    //         "author": "Erik Conley",
    //         "title": "The 1-Minute Market Report September 13, 2022",
    //         "description": "Tuesday was an extremely rare 56:1 down day, wiped out all of the gains made over the prior four days, and we are setting up for a 25% rally over the next 12 months.",
    //         "url": "https://seekingalpha.com/article/4540869-1-minute-market-report-september-13-2022",
    //         "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/172183287/image_172183287.jpg?io=getty-c-w750",
    //         "publishedAt": "2022-09-14T08:32:00Z",
    //         "content": "vldmit/E+ via Getty Images\r\nIn Tuesday's issue of the 1-Minute Market Report, I focus on three key items. Tuesday was an extremely rare 56:1 down day, we wiped out all of the gains we made over the p… [+3759 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Seeking Alpha"
    //         },
    //         "author": "Craig Blanchfield",
    //         "title": "Intel: Down, But Far From Out",
    //         "description": "Intel never quite reached the tech bubble high from 2000 before falling to current levels. See what makes INTC stock an attractive buy for long-term investors.",
    //         "url": "https://seekingalpha.com/article/4540877-intel-down-but-far-from-out",
    //         "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/458660127/image_458660127.jpg?io=getty-c-w750",
    //         "publishedAt": "2022-09-14T09:09:25Z",
    //         "content": "JasonDoiy\r\nIn 1965, Intel (NASDAQ:NASDAQ:INTC) co-founder Gordon Moore made his now famous prediction that computer processing power would double every year. While that prediction was fairly accurate… [+9198 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Taisy0.com"
    //         },
    //         "author": "taisy0",
    //         "title": "AppleのA17チップやM3チップは台湾TSMCの3nmプロセスで製造か",
    //         "description": "先日に発表された「iPhone 14 Pro」と「iPhone 14 Pro Max」に搭載されているA16 Bionicチップは4nmプロセスで製造されていますが、Nikkei Asiaが、関係筋の話として、Apple ...",
    //         "url": "https://taisy0.com/2022/09/14/162026.html",
    //         "urlToImage": "https://taisy0.com/wp-content/uploads/2022/09/th_a16bionic.jpg",
    //         "publishedAt": "2022-09-14T04:03:29Z",
    //         "content": "iPhone 14 ProiPhone 14 Pro MaxA16 Bionic4nmNikkei AsiaAppleiPhoneMacTSMC3nm\r\niPhone 15 ProA17TSMC3nmN3E\r\nAppleMacM33nm\r\niPhone 14iPhone 14/14 PlusiPhone 14 Pro/14 Pro MaxiPhone 15"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Macitynet.it"
    //         },
    //         "author": "Mauro Notarianni",
    //         "title": "I processori M3 e A17 metteranno il turbo ai prodotti Apple",
    //         "description": "I chip M3 per futuri Mac e gli A17 per i futuri iPhone 15 Pro sfrutteranno un nuovo processo produttivo a 3nm di TSMC, un nodo noto come N3E. Un vantaggio tecnologico che potrebbe dare una forte spinta ai dispositivi della Mela\n- su macitynet.it I processori …",
    //         "url": "https://www.macitynet.it/i-chip-m3-e-a17-sfrutteranno-un-nuovo-nodo-a-3nm-di-tsmc/",
    //         "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/04/wafer-chip-tsmc-720.jpg",
    //         "publishedAt": "2022-09-14T07:59:36Z",
    //         "content": "Mentre c’è chi dibatte sulla reale consistenza tecnica dei processori A16 di iPhone 14 Pro e sugli M2 dei nuovi MacBook Air, Apple guarda avanti e prepara un balzo tecnologico consistente con gli M3 … [+1608 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Macitynet.it"
    //         },
    //         "author": "Emiliano Contarino",
    //         "title": "iPhone 14, sostituire la batteria costa un occhio",
    //         "description": "Apple aumenta sensibilmente il costo per sostituire la batteria di tutti gli iPhone 14 rispetto ai modelli delle generazioni precedenti\n- su macitynet.it iPhone 14, sostituire la batteria costa un occhio",
    //         "url": "https://www.macitynet.it/iphone-14-sostituire-batteria-costa-un-occhio/",
    //         "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/09/iphone-14-e-14-pro.jpg",
    //         "publishedAt": "2022-09-14T08:29:14Z",
    //         "content": "L’arrivo della nuova gamma iPhone 14 ha portato aumenti dei prezzi ai listini base in Italia e praticamente ovunque nel mondo, con le uniche eccezioni di USA e Cina, inoltre, come se non bastasse, an… [+1821 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Macitynet.it"
    //         },
    //         "author": "Pubblicità",
    //         "title": "Offerte Amazon 14 settembre fino al 52% su Apple, Netgear, Philips Hue, Shark, Samsung, Seagate",
    //         "description": "In sconto tracker, memorie, switch, monitor, router, luci, telecamere e non solo\n- su macitynet.it Offerte Amazon 14 settembre fino al 52% su Apple, Netgear, Philips Hue, Shark, Samsung, Seagate",
    //         "url": "https://www.macitynet.it/?p=1144898",
    //         "urlToImage": "https://www.macitynet.it/wp-content/uploads/2018/04/amazonlista3.jpg",
    //         "publishedAt": "2022-09-14T06:59:01Z",
    //         "content": "Quelle che trovate elencate in questa pagina sono le offerte valide nel momento in cui scriviamo su Amazon.\r\nAttenzione! i prezzi base riferiti ai prodotti Apple sono ora quelli del nuovo listino in … [+6823 chars]"
    //         }
            
    // ]
    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    capitaliseFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            // articles:this.articles,
            articles:[],
            loading:true,
            page:1,
            totalResults:0
        }
        document.title=`${this.capitaliseFirstLetter(this.props.category)}-NewsMonkey`;
    }

    async updateNews(){
        this.props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0595bc7839643ad87986e93e415f999&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        this.props.setProgress(30);
        let parsedData=await data.json()
        this.props.setProgress(70);
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
        this.props.setProgress(100);

    }
    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0595bc7839643ad87986e93e415f999&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json()
        // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
        this.updateNews();
    }

    handlePrevClick=async ()=>{
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0595bc7839643ad87986e93e415f999&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json()
        // this.setState({
        //     page:this.state.page-1,
        //     articles:parsedData.articles,
        //     loading:false
        // })
        this.setState({page:this.state.page-1});
        this.updateNews();

    }

    handleNextClick=async ()=>{
        // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0595bc7839643ad87986e93e415f999&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true});
        //     let data=await fetch(url);
        //     let parsedData=await data.json()
        //     this.setState({
        //         page:this.state.page+1,
        //         articles:parsedData.articles,
        //         loading:false
        //     })
        // }
        this.setState({page:this.state.page+1});
        this.updateNews();
    }
    fetchMoreData = async() => {
        this.setState({
            page:this.state.page+1
        })
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0595bc7839643ad87986e93e415f999&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults})
        
      };
  render() {
    return (
      <>
        <h1 className='text-center' style={{margin:'35px 0px'}}>NewsMonkey - Top {this.capitaliseFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}>
          <div className="container">

          
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                    </div>
                })}   
            </div>
            </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}
