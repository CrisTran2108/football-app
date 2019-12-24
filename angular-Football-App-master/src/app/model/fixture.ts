export interface Fixture {
  match_id:                      string;
  country_id:                    string;
  country_name:                  string;
  league_id:                     string;
  league_name:                   string;
  match_date:                    Date;
  match_status:                  string;
  match_time:                    string;
  match_hometeam_id:             string;
  match_hometeam_name:           string;
  match_hometeam_score:          string;
  match_awayteam_name:           string;
  match_awayteam_id:             string;
  match_awayteam_score:          string;
  match_hometeam_halftime_score: string;
  match_awayteam_halftime_score: string;
  match_hometeam_extra_score:    string;
  match_awayteam_extra_score:    string;
  match_hometeam_penalty_score:  string;
  match_awayteam_penalty_score:  string;
  match_hometeam_ft_score:       string;
  match_awayteam_ft_score:       string;
  match_hometeam_system:         string;
  match_awayteam_system:         string;
  match_live:                    string;
  goalscorer:                    Goalscorer[];
  cards:                         CardElement[];
  substitutions:                 Substitutions;
  lineup:                        Lineup;
  statistics:                    Statistic[];
}

export interface CardElement {
  time:       string;
  home_fault: string;
  card:       CardEnum;
  away_fault: string;
  info:       string;
}

export enum CardEnum {
  RedCard = "red card",
  YellowCard = "yellow card",
}

export interface Goalscorer {
  time:        string;
  home_scorer: string;
  score:       string;
  away_scorer: string;
  info:        string;
}

export interface Lineup {
  home: LineupAway;
  away: LineupAway;
}

export interface LineupAway {
  starting_lineups: Coach[];
  substitutes:      Coach[];
  coach:            Coach[];
  missing_players:  Coach[];
}

export interface Coach {
  lineup_player:   string;
  lineup_number:   string;
  lineup_position: string;
}

export interface Statistic {
  type: string;
  home: string;
  away: string;
}

export interface Substitutions {
  home: AwayElement[];
  away: AwayElement[];
}

export interface AwayElement {
  time:         string;
  substitution: string;
}
