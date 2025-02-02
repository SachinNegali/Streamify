"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  {
    date: 1706876166379,
    totalUsers: 69,
    activeUsers: 35,
  },
  {
    date: 1706962566379,
    totalUsers: 157,
    activeUsers: 113,
  },
  {
    date: 1707048966379,
    totalUsers: 180,
    activeUsers: 109,
  },
  {
    date: 1707135366379,
    totalUsers: 233,
    activeUsers: 139,
  },
  {
    date: 1707221766379,
    totalUsers: 273,
    activeUsers: 137,
  },
  {
    date: 1707308166379,
    totalUsers: 304,
    activeUsers: 172,
  },
  {
    date: 1707394566379,
    totalUsers: 347,
    activeUsers: 271,
  },
  {
    date: 1707480966379,
    totalUsers: 388,
    activeUsers: 300,
  },
  {
    date: 1707567366379,
    totalUsers: 488,
    activeUsers: 327,
  },
  {
    date: 1707653766379,
    totalUsers: 516,
    activeUsers: 275,
  },
  {
    date: 1707740166379,
    totalUsers: 537,
    activeUsers: 334,
  },
  {
    date: 1707826566379,
    totalUsers: 590,
    activeUsers: 343,
  },
  {
    date: 1707912966379,
    totalUsers: 680,
    activeUsers: 397,
  },
  {
    date: 1707999366379,
    totalUsers: 737,
    activeUsers: 368,
  },
  {
    date: 1708085766379,
    totalUsers: 797,
    activeUsers: 554,
  },
  {
    date: 1708172166379,
    totalUsers: 878,
    activeUsers: 450,
  },
  {
    date: 1708258566379,
    totalUsers: 903,
    activeUsers: 496,
  },
  {
    date: 1708344966379,
    totalUsers: 948,
    activeUsers: 481,
  },
  {
    date: 1708431366379,
    totalUsers: 970,
    activeUsers: 585,
  },
  {
    date: 1708517766379,
    totalUsers: 1051,
    activeUsers: 596,
  },
  {
    date: 1708604166379,
    totalUsers: 1131,
    activeUsers: 814,
  },
  {
    date: 1708690566379,
    totalUsers: 1170,
    activeUsers: 785,
  },
  {
    date: 1708776966379,
    totalUsers: 1249,
    activeUsers: 840,
  },
  {
    date: 1708863366379,
    totalUsers: 1294,
    activeUsers: 895,
  },
  {
    date: 1708949766379,
    totalUsers: 1354,
    activeUsers: 990,
  },
  {
    date: 1709036166379,
    totalUsers: 1409,
    activeUsers: 1058,
  },
  {
    date: 1709122566379,
    totalUsers: 1487,
    activeUsers: 1036,
  },
  {
    date: 1709208966379,
    totalUsers: 1570,
    activeUsers: 1201,
  },
  {
    date: 1709295366379,
    totalUsers: 1657,
    activeUsers: 977,
  },
  {
    date: 1709381766379,
    totalUsers: 1744,
    activeUsers: 884,
  },
  {
    date: 1709468166379,
    totalUsers: 1826,
    activeUsers: 1338,
  },
  {
    date: 1709554566379,
    totalUsers: 1856,
    activeUsers: 930,
  },
  {
    date: 1709640966379,
    totalUsers: 1932,
    activeUsers: 1409,
  },
  {
    date: 1709727366379,
    totalUsers: 2014,
    activeUsers: 1266,
  },
  {
    date: 1709813766379,
    totalUsers: 2062,
    activeUsers: 1440,
  },
  {
    date: 1709900166379,
    totalUsers: 2092,
    activeUsers: 1658,
  },
  {
    date: 1709986566379,
    totalUsers: 2190,
    activeUsers: 1268,
  },
  {
    date: 1710072966379,
    totalUsers: 2239,
    activeUsers: 1675,
  },
  {
    date: 1710159366379,
    totalUsers: 2308,
    activeUsers: 1432,
  },
  {
    date: 1710245766379,
    totalUsers: 2334,
    activeUsers: 1764,
  },
  {
    date: 1710332166379,
    totalUsers: 2411,
    activeUsers: 1732,
  },
  {
    date: 1710418566379,
    totalUsers: 2453,
    activeUsers: 1840,
  },
  {
    date: 1710504966379,
    totalUsers: 2501,
    activeUsers: 1471,
  },
  {
    date: 1710591366379,
    totalUsers: 2586,
    activeUsers: 1595,
  },
  {
    date: 1710677766379,
    totalUsers: 2684,
    activeUsers: 1602,
  },
  {
    date: 1710764166379,
    totalUsers: 2718,
    activeUsers: 1414,
  },
  {
    date: 1710850566379,
    totalUsers: 2783,
    activeUsers: 1584,
  },
  {
    date: 1710936966379,
    totalUsers: 2866,
    activeUsers: 2070,
  },
  {
    date: 1711023366379,
    totalUsers: 2962,
    activeUsers: 1901,
  },
  {
    date: 1711109766379,
    totalUsers: 3023,
    activeUsers: 1794,
  },
  {
    date: 1711196166379,
    totalUsers: 3106,
    activeUsers: 2397,
  },
  {
    date: 1711282566379,
    totalUsers: 3135,
    activeUsers: 1660,
  },
  {
    date: 1711368966379,
    totalUsers: 3182,
    activeUsers: 1870,
  },
  {
    date: 1711455366379,
    totalUsers: 3217,
    activeUsers: 1804,
  },
  {
    date: 1711541766379,
    totalUsers: 3256,
    activeUsers: 2169,
  },
  {
    date: 1711628166379,
    totalUsers: 3291,
    activeUsers: 1662,
  },
  {
    date: 1711714566379,
    totalUsers: 3358,
    activeUsers: 1900,
  },
  {
    date: 1711800966379,
    totalUsers: 3406,
    activeUsers: 2497,
  },
  {
    date: 1711887366379,
    totalUsers: 3444,
    activeUsers: 1998,
  },
  {
    date: 1711973766379,
    totalUsers: 3467,
    activeUsers: 2391,
  },
  {
    date: 1712060166379,
    totalUsers: 3545,
    activeUsers: 2131,
  },
  {
    date: 1712146566379,
    totalUsers: 3627,
    activeUsers: 2447,
  },
  {
    date: 1712232966379,
    totalUsers: 3648,
    activeUsers: 2476,
  },
  {
    date: 1712319366379,
    totalUsers: 3711,
    activeUsers: 2126,
  },
  {
    date: 1712405766379,
    totalUsers: 3731,
    activeUsers: 1873,
  },
  {
    date: 1712492166379,
    totalUsers: 3811,
    activeUsers: 1906,
  },
  {
    date: 1712578566379,
    totalUsers: 3908,
    activeUsers: 3108,
  },
  {
    date: 1712664966379,
    totalUsers: 3982,
    activeUsers: 3093,
  },
  {
    date: 1712751366379,
    totalUsers: 4052,
    activeUsers: 2367,
  },
  {
    date: 1712837766379,
    totalUsers: 4079,
    activeUsers: 2218,
  },
  {
    date: 1712924166379,
    totalUsers: 4103,
    activeUsers: 3176,
  },
  {
    date: 1713010566379,
    totalUsers: 4177,
    activeUsers: 2137,
  },
  {
    date: 1713096966379,
    totalUsers: 4226,
    activeUsers: 2900,
  },
  {
    date: 1713183366379,
    totalUsers: 4285,
    activeUsers: 2268,
  },
  {
    date: 1713269766379,
    totalUsers: 4385,
    activeUsers: 3402,
  },
  {
    date: 1713356166379,
    totalUsers: 4413,
    activeUsers: 3369,
  },
  {
    date: 1713442566379,
    totalUsers: 4482,
    activeUsers: 3001,
  },
  {
    date: 1713528966379,
    totalUsers: 4516,
    activeUsers: 3287,
  },
  {
    date: 1713615366379,
    totalUsers: 4579,
    activeUsers: 3566,
  },
  {
    date: 1713701766379,
    totalUsers: 4654,
    activeUsers: 2417,
  },
  {
    date: 1713788166379,
    totalUsers: 4687,
    activeUsers: 2879,
  },
  {
    date: 1713874566379,
    totalUsers: 4746,
    activeUsers: 3176,
  },
  {
    date: 1713960966379,
    totalUsers: 4775,
    activeUsers: 3409,
  },
  {
    date: 1714047366379,
    totalUsers: 4856,
    activeUsers: 2637,
  },
  {
    date: 1714133766379,
    totalUsers: 4904,
    activeUsers: 3886,
  },
  {
    date: 1714220166379,
    totalUsers: 4954,
    activeUsers: 2706,
  },
  {
    date: 1714306566379,
    totalUsers: 4995,
    activeUsers: 3610,
  },
  {
    date: 1714392966379,
    totalUsers: 5051,
    activeUsers: 3524,
  },
  {
    date: 1714479366379,
    totalUsers: 5091,
    activeUsers: 2878,
  },
  {
    date: 1714565766379,
    totalUsers: 5189,
    activeUsers: 3875,
  },
  {
    date: 1714652166379,
    totalUsers: 5243,
    activeUsers: 3247,
  },
  {
    date: 1714738566379,
    totalUsers: 5307,
    activeUsers: 2872,
  },
  {
    date: 1714824966379,
    totalUsers: 5352,
    activeUsers: 4156,
  },
  {
    date: 1714911366379,
    totalUsers: 5413,
    activeUsers: 3583,
  },
  {
    date: 1714997766379,
    totalUsers: 5498,
    activeUsers: 3264,
  },
  {
    date: 1715084166379,
    totalUsers: 5563,
    activeUsers: 3891,
  },
  {
    date: 1715170566379,
    totalUsers: 5583,
    activeUsers: 3428,
  },
  {
    date: 1715256966379,
    totalUsers: 5603,
    activeUsers: 2869,
  },
  {
    date: 1715343366379,
    totalUsers: 5673,
    activeUsers: 3371,
  },
  {
    date: 1715429766379,
    totalUsers: 5711,
    activeUsers: 3647,
  },
  {
    date: 1715516166379,
    totalUsers: 5736,
    activeUsers: 4306,
  },
  {
    date: 1715602566379,
    totalUsers: 5795,
    activeUsers: 4237,
  },
  {
    date: 1715688966379,
    totalUsers: 5872,
    activeUsers: 3165,
  },
  {
    date: 1715775366379,
    totalUsers: 5921,
    activeUsers: 4584,
  },
  {
    date: 1715861766379,
    totalUsers: 5972,
    activeUsers: 3680,
  },
  {
    date: 1715948166379,
    totalUsers: 6069,
    activeUsers: 4421,
  },
  {
    date: 1716034566379,
    totalUsers: 6126,
    activeUsers: 3546,
  },
  {
    date: 1716120966379,
    totalUsers: 6148,
    activeUsers: 3862,
  },
  {
    date: 1716207366379,
    totalUsers: 6237,
    activeUsers: 4643,
  },
  {
    date: 1716293766379,
    totalUsers: 6262,
    activeUsers: 4072,
  },
  {
    date: 1716380166379,
    totalUsers: 6305,
    activeUsers: 4835,
  },
  {
    date: 1716466566379,
    totalUsers: 6342,
    activeUsers: 3511,
  },
  {
    date: 1716552966379,
    totalUsers: 6425,
    activeUsers: 3501,
  },
  {
    date: 1716639366379,
    totalUsers: 6478,
    activeUsers: 3688,
  },
  {
    date: 1716725766379,
    totalUsers: 6512,
    activeUsers: 3733,
  },
  {
    date: 1716812166379,
    totalUsers: 6602,
    activeUsers: 3948,
  },
  {
    date: 1716898566379,
    totalUsers: 6640,
    activeUsers: 4955,
  },
  {
    date: 1716984966379,
    totalUsers: 6684,
    activeUsers: 5038,
  },
  {
    date: 1717071366379,
    totalUsers: 6752,
    activeUsers: 4838,
  },
  {
    date: 1717157766379,
    totalUsers: 6799,
    activeUsers: 3528,
  },
  {
    date: 1717244166379,
    totalUsers: 6852,
    activeUsers: 3643,
  },
  {
    date: 1717330566379,
    totalUsers: 6942,
    activeUsers: 3950,
  },
  {
    date: 1717416966379,
    totalUsers: 7037,
    activeUsers: 4869,
  },
  {
    date: 1717503366379,
    totalUsers: 7062,
    activeUsers: 4017,
  },
  {
    date: 1717589766379,
    totalUsers: 7101,
    activeUsers: 3900,
  },
  {
    date: 1717676166379,
    totalUsers: 7168,
    activeUsers: 3684,
  },
  {
    date: 1717762566379,
    totalUsers: 7217,
    activeUsers: 5057,
  },
  {
    date: 1717848966379,
    totalUsers: 7283,
    activeUsers: 5174,
  },
  {
    date: 1717935366379,
    totalUsers: 7303,
    activeUsers: 4621,
  },
  {
    date: 1718021766379,
    totalUsers: 7388,
    activeUsers: 5450,
  },
  {
    date: 1718108166379,
    totalUsers: 7481,
    activeUsers: 4291,
  },
  {
    date: 1718194566379,
    totalUsers: 7570,
    activeUsers: 5613,
  },
  {
    date: 1718280966379,
    totalUsers: 7632,
    activeUsers: 4801,
  },
  {
    date: 1718367366379,
    totalUsers: 7658,
    activeUsers: 6033,
  },
  {
    date: 1718453766379,
    totalUsers: 7721,
    activeUsers: 4163,
  },
  {
    date: 1718540166379,
    totalUsers: 7799,
    activeUsers: 5115,
  },
  {
    date: 1718626566379,
    totalUsers: 7846,
    activeUsers: 5051,
  },
  {
    date: 1718712966379,
    totalUsers: 7920,
    activeUsers: 5551,
  },
  {
    date: 1718799366379,
    totalUsers: 7940,
    activeUsers: 4647,
  },
  {
    date: 1718885766379,
    totalUsers: 7971,
    activeUsers: 5850,
  },
  {
    date: 1718972166379,
    totalUsers: 8034,
    activeUsers: 4549,
  },
  {
    date: 1719058566379,
    totalUsers: 8060,
    activeUsers: 6106,
  },
  {
    date: 1719144966379,
    totalUsers: 8144,
    activeUsers: 5796,
  },
  {
    date: 1719231366379,
    totalUsers: 8204,
    activeUsers: 5161,
  },
  {
    date: 1719317766379,
    totalUsers: 8279,
    activeUsers: 4399,
  },
  {
    date: 1719404166379,
    totalUsers: 8341,
    activeUsers: 5792,
  },
  {
    date: 1719490566379,
    totalUsers: 8390,
    activeUsers: 6417,
  },
  {
    date: 1719576966379,
    totalUsers: 8474,
    activeUsers: 5531,
  },
  {
    date: 1719663366379,
    totalUsers: 8553,
    activeUsers: 6485,
  },
  {
    date: 1719749766379,
    totalUsers: 8584,
    activeUsers: 5145,
  },
  {
    date: 1719836166379,
    totalUsers: 8607,
    activeUsers: 6070,
  },
  {
    date: 1719922566379,
    totalUsers: 8674,
    activeUsers: 6601,
  },
  {
    date: 1720008966379,
    totalUsers: 8774,
    activeUsers: 6997,
  },
  {
    date: 1720095366379,
    totalUsers: 8852,
    activeUsers: 5878,
  },
  {
    date: 1720181766379,
    totalUsers: 8952,
    activeUsers: 5573,
  },
  {
    date: 1720268166379,
    totalUsers: 9044,
    activeUsers: 5179,
  },
  {
    date: 1720354566379,
    totalUsers: 9116,
    activeUsers: 5152,
  },
  {
    date: 1720440966379,
    totalUsers: 9158,
    activeUsers: 4980,
  },
  {
    date: 1720527366379,
    totalUsers: 9227,
    activeUsers: 7026,
  },
  {
    date: 1720613766379,
    totalUsers: 9302,
    activeUsers: 4671,
  },
  {
    date: 1720700166379,
    totalUsers: 9375,
    activeUsers: 5760,
  },
  {
    date: 1720786566379,
    totalUsers: 9400,
    activeUsers: 7489,
  },
  {
    date: 1720872966379,
    totalUsers: 9460,
    activeUsers: 5698,
  },
  {
    date: 1720959366379,
    totalUsers: 9520,
    activeUsers: 4967,
  },
  {
    date: 1721045766379,
    totalUsers: 9616,
    activeUsers: 7332,
  },
  {
    date: 1721132166379,
    totalUsers: 9673,
    activeUsers: 7551,
  },
  {
    date: 1721218566379,
    totalUsers: 9722,
    activeUsers: 5266,
  },
  {
    date: 1721304966379,
    totalUsers: 9744,
    activeUsers: 5731,
  },
  {
    date: 1721391366379,
    totalUsers: 9765,
    activeUsers: 5644,
  },
  {
    date: 1721477766379,
    totalUsers: 9842,
    activeUsers: 6326,
  },
  {
    date: 1721564166379,
    totalUsers: 9867,
    activeUsers: 6065,
  },
  {
    date: 1721650566379,
    totalUsers: 9955,
    activeUsers: 5601,
  },
  {
    date: 1721736966379,
    totalUsers: 10000,
    activeUsers: 5865,
  },
  {
    date: 1721823366379,
    totalUsers: 10075,
    activeUsers: 5784,
  },
  {
    date: 1721909766379,
    totalUsers: 10136,
    activeUsers: 5607,
  },
  {
    date: 1721996166379,
    totalUsers: 10235,
    activeUsers: 7863,
  },
  {
    date: 1722082566379,
    totalUsers: 10284,
    activeUsers: 7924,
  },
  {
    date: 1722168966379,
    totalUsers: 10353,
    activeUsers: 6996,
  },
  {
    date: 1722255366379,
    totalUsers: 10448,
    activeUsers: 6781,
  },
  {
    date: 1722341766379,
    totalUsers: 10502,
    activeUsers: 8269,
  },
  {
    date: 1722428166379,
    totalUsers: 10590,
    activeUsers: 6341,
  },
  {
    date: 1722514566379,
    totalUsers: 10614,
    activeUsers: 5926,
  },
  {
    date: 1722600966379,
    totalUsers: 10671,
    activeUsers: 6337,
  },
  {
    date: 1722687366379,
    totalUsers: 10770,
    activeUsers: 7663,
  },
  {
    date: 1722773766379,
    totalUsers: 10827,
    activeUsers: 7025,
  },
  {
    date: 1722860166379,
    totalUsers: 10865,
    activeUsers: 7722,
  },
  {
    date: 1722946566379,
    totalUsers: 10913,
    activeUsers: 8057,
  },
  {
    date: 1723032966379,
    totalUsers: 10982,
    activeUsers: 6334,
  },
  {
    date: 1723119366379,
    totalUsers: 11048,
    activeUsers: 8802,
  },
  {
    date: 1723205766379,
    totalUsers: 11144,
    activeUsers: 7437,
  },
  {
    date: 1723292166379,
    totalUsers: 11224,
    activeUsers: 8387,
  },
  {
    date: 1723378566379,
    totalUsers: 11323,
    activeUsers: 7320,
  },
  {
    date: 1723464966379,
    totalUsers: 11418,
    activeUsers: 7297,
  },
  {
    date: 1723551366379,
    totalUsers: 11502,
    activeUsers: 7370,
  },
  {
    date: 1723637766379,
    totalUsers: 11600,
    activeUsers: 6430,
  },
  {
    date: 1723724166379,
    totalUsers: 11685,
    activeUsers: 8577,
  },
  {
    date: 1723810566379,
    totalUsers: 11779,
    activeUsers: 9296,
  },
  {
    date: 1723896966379,
    totalUsers: 11823,
    activeUsers: 8362,
  },
  {
    date: 1723983366379,
    totalUsers: 11900,
    activeUsers: 7146,
  },
  {
    date: 1724069766379,
    totalUsers: 11929,
    activeUsers: 9184,
  },
  {
    date: 1724156166379,
    totalUsers: 12028,
    activeUsers: 6525,
  },
  {
    date: 1724242566379,
    totalUsers: 12086,
    activeUsers: 8489,
  },
  {
    date: 1724328966379,
    totalUsers: 12164,
    activeUsers: 6951,
  },
  {
    date: 1724415366379,
    totalUsers: 12242,
    activeUsers: 7305,
  },
  {
    date: 1724501766379,
    totalUsers: 12310,
    activeUsers: 7105,
  },
  {
    date: 1724588166379,
    totalUsers: 12407,
    activeUsers: 8468,
  },
  {
    date: 1724674566379,
    totalUsers: 12480,
    activeUsers: 9848,
  },
  {
    date: 1724760966379,
    totalUsers: 12542,
    activeUsers: 6991,
  },
  {
    date: 1724847366379,
    totalUsers: 12626,
    activeUsers: 9126,
  },
  {
    date: 1724933766379,
    totalUsers: 12707,
    activeUsers: 6602,
  },
  {
    date: 1725020166379,
    totalUsers: 12732,
    activeUsers: 8079,
  },
  {
    date: 1725106566379,
    totalUsers: 12779,
    activeUsers: 8355,
  },
  {
    date: 1725192966379,
    totalUsers: 12872,
    activeUsers: 9466,
  },
  {
    date: 1725279366379,
    totalUsers: 12930,
    activeUsers: 9653,
  },
  {
    date: 1725365766379,
    totalUsers: 13010,
    activeUsers: 9980,
  },
  {
    date: 1725452166379,
    totalUsers: 13052,
    activeUsers: 8792,
  },
  {
    date: 1725538566379,
    totalUsers: 13151,
    activeUsers: 10014,
  },
  {
    date: 1725624966379,
    totalUsers: 13216,
    activeUsers: 9580,
  },
  {
    date: 1725711366379,
    totalUsers: 13304,
    activeUsers: 8838,
  },
  {
    date: 1725797766379,
    totalUsers: 13360,
    activeUsers: 10509,
  },
  {
    date: 1725884166379,
    totalUsers: 13384,
    activeUsers: 6796,
  },
  {
    date: 1725970566379,
    totalUsers: 13420,
    activeUsers: 8112,
  },
  {
    date: 1726056966379,
    totalUsers: 13490,
    activeUsers: 8589,
  },
  {
    date: 1726143366379,
    totalUsers: 13569,
    activeUsers: 10664,
  },
  {
    date: 1726229766379,
    totalUsers: 13615,
    activeUsers: 6968,
  },
  {
    date: 1726316166379,
    totalUsers: 13660,
    activeUsers: 9116,
  },
  {
    date: 1726402566379,
    totalUsers: 13709,
    activeUsers: 9180,
  },
  {
    date: 1726488966379,
    totalUsers: 13804,
    activeUsers: 8272,
  },
  {
    date: 1726575366379,
    totalUsers: 13870,
    activeUsers: 7383,
  },
  {
    date: 1726661766379,
    totalUsers: 13927,
    activeUsers: 7251,
  },
  {
    date: 1726748166379,
    totalUsers: 13962,
    activeUsers: 9274,
  },
  {
    date: 1726834566379,
    totalUsers: 14056,
    activeUsers: 10153,
  },
  {
    date: 1726920966379,
    totalUsers: 14116,
    activeUsers: 9822,
  },
  {
    date: 1727007366379,
    totalUsers: 14173,
    activeUsers: 10119,
  },
  {
    date: 1727093766379,
    totalUsers: 14197,
    activeUsers: 8291,
  },
  {
    date: 1727180166379,
    totalUsers: 14261,
    activeUsers: 10723,
  },
  {
    date: 1727266566379,
    totalUsers: 14304,
    activeUsers: 10151,
  },
  {
    date: 1727352966379,
    totalUsers: 14381,
    activeUsers: 10578,
  },
  {
    date: 1727439366379,
    totalUsers: 14451,
    activeUsers: 8870,
  },
  {
    date: 1727525766379,
    totalUsers: 14537,
    activeUsers: 9147,
  },
  {
    date: 1727612166379,
    totalUsers: 14608,
    activeUsers: 7436,
  },
  {
    date: 1727698566379,
    totalUsers: 14700,
    activeUsers: 9265,
  },
  {
    date: 1727784966379,
    totalUsers: 14721,
    activeUsers: 10834,
  },
  {
    date: 1727871366379,
    totalUsers: 14770,
    activeUsers: 9306,
  },
  {
    date: 1727957766379,
    totalUsers: 14816,
    activeUsers: 7982,
  },
  {
    date: 1728044166379,
    totalUsers: 14911,
    activeUsers: 8012,
  },
  {
    date: 1728130566379,
    totalUsers: 14953,
    activeUsers: 9230,
  },
  {
    date: 1728216966379,
    totalUsers: 14995,
    activeUsers: 7589,
  },
  {
    date: 1728303366379,
    totalUsers: 15046,
    activeUsers: 10477,
  },
  {
    date: 1728389766379,
    totalUsers: 15074,
    activeUsers: 10878,
  },
  {
    date: 1728476166379,
    totalUsers: 15164,
    activeUsers: 10702,
  },
  {
    date: 1728562566379,
    totalUsers: 15192,
    activeUsers: 10254,
  },
  {
    date: 1728648966379,
    totalUsers: 15241,
    activeUsers: 11343,
  },
  {
    date: 1728735366379,
    totalUsers: 15295,
    activeUsers: 9062,
  },
  {
    date: 1728821766379,
    totalUsers: 15331,
    activeUsers: 12119,
  },
  {
    date: 1728908166379,
    totalUsers: 15380,
    activeUsers: 7775,
  },
  {
    date: 1728994566379,
    totalUsers: 15420,
    activeUsers: 10538,
  },
  {
    date: 1729080966379,
    totalUsers: 15460,
    activeUsers: 11967,
  },
  {
    date: 1729167366379,
    totalUsers: 15482,
    activeUsers: 9176,
  },
  {
    date: 1729253766379,
    totalUsers: 15520,
    activeUsers: 9089,
  },
  {
    date: 1729340166379,
    totalUsers: 15605,
    activeUsers: 10646,
  },
  {
    date: 1729426566379,
    totalUsers: 15648,
    activeUsers: 9089,
  },
  {
    date: 1729512966379,
    totalUsers: 15716,
    activeUsers: 9361,
  },
  {
    date: 1729599366379,
    totalUsers: 15782,
    activeUsers: 8386,
  },
  {
    date: 1729685766379,
    totalUsers: 15816,
    activeUsers: 10041,
  },
  {
    date: 1729772166379,
    totalUsers: 15857,
    activeUsers: 8392,
  },
  {
    date: 1729858566379,
    totalUsers: 15941,
    activeUsers: 9553,
  },
  {
    date: 1729944966379,
    totalUsers: 15976,
    activeUsers: 11374,
  },
  {
    date: 1730031366379,
    totalUsers: 16061,
    activeUsers: 11690,
  },
  {
    date: 1730117766379,
    totalUsers: 16095,
    activeUsers: 10299,
  },
  {
    date: 1730204166379,
    totalUsers: 16183,
    activeUsers: 9790,
  },
  {
    date: 1730290566379,
    totalUsers: 16224,
    activeUsers: 8843,
  },
  {
    date: 1730376966379,
    totalUsers: 16283,
    activeUsers: 9878,
  },
  {
    date: 1730463366379,
    totalUsers: 16360,
    activeUsers: 11498,
  },
  {
    date: 1730549766379,
    totalUsers: 16403,
    activeUsers: 8560,
  },
  {
    date: 1730636166379,
    totalUsers: 16427,
    activeUsers: 10216,
  },
  {
    date: 1730722566379,
    totalUsers: 16497,
    activeUsers: 12534,
  },
  {
    date: 1730808966379,
    totalUsers: 16543,
    activeUsers: 9406,
  },
  {
    date: 1730895366379,
    totalUsers: 16626,
    activeUsers: 9838,
  },
  {
    date: 1730981766379,
    totalUsers: 16685,
    activeUsers: 9661,
  },
  {
    date: 1731068166379,
    totalUsers: 16766,
    activeUsers: 13331,
  },
  {
    date: 1731154566379,
    totalUsers: 16851,
    activeUsers: 12848,
  },
  {
    date: 1731240966379,
    totalUsers: 16946,
    activeUsers: 10260,
  },
  {
    date: 1731327366379,
    totalUsers: 17018,
    activeUsers: 11546,
  },
  {
    date: 1731413766379,
    totalUsers: 17079,
    activeUsers: 11910,
  },
  {
    date: 1731500166379,
    totalUsers: 17146,
    activeUsers: 10007,
  },
  {
    date: 1731586566379,
    totalUsers: 17198,
    activeUsers: 9230,
  },
  {
    date: 1731672966379,
    totalUsers: 17296,
    activeUsers: 13033,
  },
  {
    date: 1731759366379,
    totalUsers: 17365,
    activeUsers: 11419,
  },
  {
    date: 1731845766379,
    totalUsers: 17402,
    activeUsers: 10020,
  },
  {
    date: 1731932166379,
    totalUsers: 17498,
    activeUsers: 8966,
  },
  {
    date: 1732018566379,
    totalUsers: 17587,
    activeUsers: 13503,
  },
  {
    date: 1732104966379,
    totalUsers: 17645,
    activeUsers: 13608,
  },
  {
    date: 1732191366379,
    totalUsers: 17685,
    activeUsers: 8872,
  },
  {
    date: 1732277766379,
    totalUsers: 17774,
    activeUsers: 9086,
  },
  {
    date: 1732364166379,
    totalUsers: 17800,
    activeUsers: 9201,
  },
  {
    date: 1732450566379,
    totalUsers: 17888,
    activeUsers: 11017,
  },
  {
    date: 1732536966379,
    totalUsers: 17983,
    activeUsers: 12808,
  },
  {
    date: 1732623366379,
    totalUsers: 18054,
    activeUsers: 10305,
  },
  {
    date: 1732709766379,
    totalUsers: 18090,
    activeUsers: 13789,
  },
  {
    date: 1732796166379,
    totalUsers: 18137,
    activeUsers: 10418,
  },
  {
    date: 1732882566379,
    totalUsers: 18175,
    activeUsers: 11871,
  },
  {
    date: 1732968966379,
    totalUsers: 18268,
    activeUsers: 9273,
  },
  {
    date: 1733055366379,
    totalUsers: 18306,
    activeUsers: 14171,
  },
  {
    date: 1733141766379,
    totalUsers: 18365,
    activeUsers: 11853,
  },
  {
    date: 1733228166379,
    totalUsers: 18455,
    activeUsers: 13966,
  },
  {
    date: 1733314566379,
    totalUsers: 18541,
    activeUsers: 11808,
  },
  {
    date: 1733400966379,
    totalUsers: 18610,
    activeUsers: 10428,
  },
  {
    date: 1733487366379,
    totalUsers: 18648,
    activeUsers: 9395,
  },
  {
    date: 1733573766379,
    totalUsers: 18687,
    activeUsers: 12770,
  },
  {
    date: 1733660166379,
    totalUsers: 18741,
    activeUsers: 11266,
  },
  {
    date: 1733746566379,
    totalUsers: 18786,
    activeUsers: 12332,
  },
  {
    date: 1733832966379,
    totalUsers: 18860,
    activeUsers: 10489,
  },
  {
    date: 1733919366379,
    totalUsers: 18957,
    activeUsers: 13075,
  },
  {
    date: 1734005766379,
    totalUsers: 18983,
    activeUsers: 13531,
  },
  {
    date: 1734092166379,
    totalUsers: 19054,
    activeUsers: 14824,
  },
  {
    date: 1734178566379,
    totalUsers: 19075,
    activeUsers: 14942,
  },
  {
    date: 1734264966379,
    totalUsers: 19174,
    activeUsers: 14717,
  },
  {
    date: 1734351366379,
    totalUsers: 19240,
    activeUsers: 10070,
  },
  {
    date: 1734437766379,
    totalUsers: 19334,
    activeUsers: 14038,
  },
  {
    date: 1734524166379,
    totalUsers: 19366,
    activeUsers: 11691,
  },
  {
    date: 1734610566379,
    totalUsers: 19387,
    activeUsers: 10873,
  },
  {
    date: 1734696966379,
    totalUsers: 19424,
    activeUsers: 15303,
  },
  {
    date: 1734783366379,
    totalUsers: 19451,
    activeUsers: 11697,
  },
  {
    date: 1734869766379,
    totalUsers: 19528,
    activeUsers: 14665,
  },
  {
    date: 1734956166379,
    totalUsers: 19620,
    activeUsers: 10911,
  },
  {
    date: 1735042566379,
    totalUsers: 19682,
    activeUsers: 13622,
  },
  {
    date: 1735128966379,
    totalUsers: 19758,
    activeUsers: 11740,
  },
  {
    date: 1735215366379,
    totalUsers: 19810,
    activeUsers: 15739,
  },
  {
    date: 1735301766379,
    totalUsers: 19904,
    activeUsers: 13643,
  },
  {
    date: 1735388166379,
    totalUsers: 19984,
    activeUsers: 13057,
  },
  {
    date: 1735474566379,
    totalUsers: 20058,
    activeUsers: 10874,
  },
  {
    date: 1735560966379,
    totalUsers: 20134,
    activeUsers: 13535,
  },
  {
    date: 1735647366379,
    totalUsers: 20203,
    activeUsers: 12802,
  },
  {
    date: 1735733766379,
    totalUsers: 20261,
    activeUsers: 10651,
  },
  {
    date: 1735820166379,
    totalUsers: 20341,
    activeUsers: 12124,
  },
  {
    date: 1735906566379,
    totalUsers: 20361,
    activeUsers: 13833,
  },
  {
    date: 1735992966379,
    totalUsers: 20437,
    activeUsers: 13367,
  },
  {
    date: 1736079366379,
    totalUsers: 20474,
    activeUsers: 15816,
  },
  {
    date: 1736165766379,
    totalUsers: 20527,
    activeUsers: 15986,
  },
  {
    date: 1736252166379,
    totalUsers: 20613,
    activeUsers: 14174,
  },
  {
    date: 1736338566379,
    totalUsers: 20699,
    activeUsers: 15622,
  },
  {
    date: 1736424966379,
    totalUsers: 20737,
    activeUsers: 11076,
  },
  {
    date: 1736511366379,
    totalUsers: 20812,
    activeUsers: 13835,
  },
  {
    date: 1736597766379,
    totalUsers: 20845,
    activeUsers: 12532,
  },
  {
    date: 1736684166379,
    totalUsers: 20914,
    activeUsers: 15279,
  },
  {
    date: 1736770566379,
    totalUsers: 20961,
    activeUsers: 11240,
  },
  {
    date: 1736856966379,
    totalUsers: 21030,
    activeUsers: 11270,
  },
  {
    date: 1736943366379,
    totalUsers: 21111,
    activeUsers: 10678,
  },
  {
    date: 1737029766379,
    totalUsers: 21139,
    activeUsers: 12211,
  },
  {
    date: 1737116166379,
    totalUsers: 21183,
    activeUsers: 16235,
  },
  {
    date: 1737202566379,
    totalUsers: 21229,
    activeUsers: 16755,
  },
  {
    date: 1737288966379,
    totalUsers: 21321,
    activeUsers: 16495,
  },
  {
    date: 1737375366379,
    totalUsers: 21341,
    activeUsers: 16733,
  },
  {
    date: 1737461766379,
    totalUsers: 21408,
    activeUsers: 12008,
  },
  {
    date: 1737548166379,
    totalUsers: 21495,
    activeUsers: 14644,
  },
  {
    date: 1737634566379,
    totalUsers: 21530,
    activeUsers: 13679,
  },
  {
    date: 1737720966379,
    totalUsers: 21556,
    activeUsers: 14842,
  },
  {
    date: 1737807366379,
    totalUsers: 21641,
    activeUsers: 16820,
  },
  {
    date: 1737893766379,
    totalUsers: 21682,
    activeUsers: 13050,
  },
  {
    date: 1737980166379,
    totalUsers: 21758,
    activeUsers: 14664,
  },
  {
    date: 1738066566379,
    totalUsers: 21810,
    activeUsers: 14896,
  },
  {
    date: 1738152966379,
    totalUsers: 21838,
    activeUsers: 12302,
  },
  {
    date: 1738239366379,
    totalUsers: 21901,
    activeUsers: 14151,
  },
  {
    date: 1738325766379,
    totalUsers: 21969,
    activeUsers: 13143,
  },
  {
    date: 1738412166379,
    totalUsers: 22006,
    activeUsers: 12625,
  },
  {
    date: 1738498566379,
    totalUsers: 22057,
    activeUsers: 14704,
  },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  totalUsers: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  activeUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const GrowthChart = () => {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          {/* <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="totalUsers"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="activeUsers"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart> */}

          <AreaChart data={chartData}>
            <defs>
              <linearGradient
                id="totalUsersGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-totalUsers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-totalUsers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="activeUsersGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-activeUsers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-activeUsers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} className="stroke-muted" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="totalUsers"
              type="natural"
              fill="url(#totalUsersGradient)"
              stroke="var(--color-totalUsers)"
              strokeWidth={2}
              stackId="total"
            />
            <Area
              dataKey="activeUsers"
              type="natural"
              fill="url(#activeUsersGradient)"
              stroke="var(--color-activeUsers)"
              strokeWidth={2}
              stackId="active"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default GrowthChart;
