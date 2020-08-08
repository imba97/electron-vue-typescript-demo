/**
 * 分区类型
 */
export enum RegionType {
  DOUGA = 1,
  DOUGA_MAD = 24,
  DOUGA_MMD = 25,
  DOUGA_VOICE = 47,
  DOUGA_TOKUSATSU = 86,
  DOUGA_OTHER = 27,

  ANIME = 13,
  ANIME_SERIAL = 33,
  ANIME_FINISH = 32,
  ANIME_INFORMATION = 51,
  ANIME_OFFICAL = 152,

  GUOCHUANG = 167,
  GUOCHUANG_CHINESE = 153,
  GUOCHUANG_ORIGINAL = 168,
  GUOCHUANG_PUPPETRY = 169,
  GUOCHUANG_MOTIONCOMIC = 195,
  GUOCHUANG_INFORMATION = 170,

  MUSIC = 3,
  MUSIC_ORIGINAL = 28,
  MUSIC_COVER = 31,
  MUSIC_VOCALOID = 30,
  MUSIC_ELECTRONIC = 194,
  MUSIC_PERFORM = 59,
  MUSIC_MV = 193,
  MUSIC_LIVE = 29,
  MUSIC_OTHER = 130,

  DANCE = 129,
  DANCE_OTAKU = 20,
  DANCE_HIPHOP = 198,
  DANCE_STAR = 199,
  DANCE_CHINA = 200,
  DANCE_THREE_D = 154,
  DANCE_DEMO = 156,

  GAME = 4,
  GAME_STAND_ALONE = 17,
  GAME_ESPORTS = 171,
  GAME_MOBILE = 172,
  GAME_ONLINE = 65,
  GAME_BOARD = 173,
  GAME_GMV = 121,
  GAME_MUSIC = 136,
  GAME_MUGEN = 19,

  TECHNOLOGY = 36,
  TECHNOLOGY_SCIENCE = 201,
  TECHNOLOGY_FUN = 124,
  TECHNOLOGY_FINANCE = 207,
  TECHNOLOGY_CAMPUS = 208,
  TECHNOLOGY_CAREER = 209,
  TECHNOLOGY_WILD = 122,

  DIGITAL = 188,
  DIGITAL_MOBILE = 95,
  DIGITAL_PC = 189,
  DIGITAL_PHOTOGRAPHY = 190,
  DIGITAL_INTELLIGENCE_AV = 191,

  LIFE = 160,
  LIFE_FUNNY = 138,
  LIFE_DAILY = 21,
  LIFE_FOOD = 76,
  LIFE_ANIMAL = 75,
  LIFE_HANDMAKE = 161,
  LIFE_PAINTING = 162,
  LIFE_SPORTS = 163,
  LIFE_AUTOMOBILE = 176,
  LIFE_OTHER = 174,

  KICHIKU = 119,
  KICHIKU_GUIDE = 22,
  KICHIKU_MAD = 26,
  KICHIKU_MANUAL_VOCALOID = 126,
  KICHIKU_COURSE = 127,

  FASHION = 155,
  FASHION_MAKEUP = 157,
  FASHION_CLOTHING = 158,
  FASHION_AEROBICS = 164,
  FASHION_CATWALK = 159,
  FASHION_TRENDS = 192,

  INFORMATION = 202,
  INFORMATION_HOTSPOT = 203,
  INFORMATION_GLOBAL = 204,
  INFORMATION_SOCIAL = 205,
  INFORMATION_MULTIPLE = 206,

  ENT = 5,
  ENT_VARIETY = 71,
  ENT_STAR = 137,
  ENT_KOREA = 131,

  CINEPHILE = 181,
  CINEPHILE_CINECISM = 182,
  CINEPHILE_MONTAGE = 183,
  CINEPHILE_SHORTFILM = 85,
  CINEPHILE_TRAILER_INFO = 184,

  DOCUMENTARY = 177,
  DOCUMENTARY_HISTORY = 37,
  DOCUMENTARY_SCIENCE = 178,
  DOCUMENTARY_MILITARY = 179,
  DOCUMENTARY_TRAVEL = 180,

  MOVIE = 23,
  MOVIE_CHINESE = 147,
  MOVIE_WEST = 145,
  MOVIE_JAPAN = 146,
  MOVIE_MOVIE = 83,

  TV = 11,
  TV_MAINLAND = 185,
  TV_OVERSEAS = 187
}

/**
 * 主分区
 */
export enum MainRegionType {
  DOUGA = RegionType.DOUGA,
  ANIME = RegionType.ANIME,
  GUOCHUANG = RegionType.GUOCHUANG,
  MUSIC = RegionType.MUSIC,
  DANCE = RegionType.DANCE,
  GAME = RegionType.GAME,
  TECHNOLOGY = RegionType.TECHNOLOGY,
  DIGITAL = RegionType.DIGITAL,
  LIFE = RegionType.LIFE,
  KICHIKU = RegionType.KICHIKU,
  FASHION = RegionType.FASHION,
  INFORMATION = RegionType.INFORMATION,
  ENT = RegionType.ENT,
  CINEPHILE = RegionType.CINEPHILE,
  DOCUMENTARY = RegionType.DOCUMENTARY,
  MOVIE = RegionType.MOVIE,
  TV = RegionType.TV
}
