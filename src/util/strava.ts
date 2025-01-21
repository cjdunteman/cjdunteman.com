interface StravaActivity {
    id: number;
    name: string;
    distance: number;
    moving_time: number;
    total_elevation_gain: number;
    start_date: string;
    sport_type: string;
    map: {
      summary_polyline: string;
    };
  }