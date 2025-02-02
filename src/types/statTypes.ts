export interface StreamStats {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}

export interface Users {
  date: string;
  totalUsers: number;
  activeUsers: number;
}

export interface TopChart {
  song: string;
  artist: string;
  streams: number;
  releaseDate: string;
}

export interface Revenue {
  source: string;
  revenue: number;
}

export interface Streams {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

export interface StatsDataState {
  streamStats: StreamStats | {};
  users: Users[];
  topCharts: TopChart[];
  streams: Streams[];
  revenue: Revenue[];
  loading: boolean;
  error: any;
}
