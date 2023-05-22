export interface CasioData {
  casino: Casino
}

export interface Casino {
  categories: categories[]
  games: gamesList
}

export interface categories {
  categoryId: string
  name: string
  games: games[]
}

export interface games {
  gameId: string
}

export interface gamesList {
  [key: string]: gameData
}

export interface gameData {
  name: string
  gameId: string
  assets: Assets
}

export interface Assets {
  desktopThumbnail: DesktopThumbnail
  mobileThumbnail: MobileThumbnail
}

export interface DesktopThumbnail {
  type: string
  value: string
}

export interface MobileThumbnail {
  type: string
  value: string
}


