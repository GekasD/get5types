/**
 * Types and Interfaces
*/

type AnyStringValueObject =  { [key: string]: string };

export type Get5TeamType = 'team1' | 'team2';

export type Get5SideType = 'standard' | 'never_knife' | 'always_knife';

export type Get5TeamPlayersType = string[] | AnyStringValueObject;

export interface Get5Team {
    name: string;
    tag?: string;
    flag?: string;
    logo?: string;
    series_score?: number;

    players: Get5TeamPlayersType;
}

export interface Match {
    matchid?: string;
    num_maps?: number;
    maplist?: string[];
    skip_veto?: boolean;
    veto_first?: Get5TeamType;
    side_type?: Get5SideType;
    players_per_team?: number;
    min_players_to_ready?: number;
    min_spectators_to_ready?: number;
    favored_percentage_team1?: number;
    favored_percentage_text?: string;
    cvars?: AnyStringValueObject;
    match_title?: string;

    team1: Get5Team;
    team2: Get5Team;
}

/**
 * Enums 
*/

export enum Get5State {
    None,
    PreVeto,
    Veto,
    Warmup,
    KnifeRound,
    WaitingForKnifeRoundDecision,
    GoingLive,
    Live,
    PostGame
}

export enum Get5MatchTeam {
    Team1,
    Team2,
    TeamSpec,
    TeamNone,
    Count
}

export enum Get5MatchSideType {
    Standard,
    AlwaysKnife,
    NeverKnife
}

export enum Get5SideChoice {
    Team1CT,
    Team1T,
    KnifeRound
}

export enum Get5PauseType {
    Tech,
    Tactical
}

export enum Get5SeriesStat {
    SeriesWinner = 'winner',
    SeriesType = 'series_type',
    Series_Team1Name = 'team1_name',
    Series_Team2Name = 'team2_name',
    Series_Forfeit = 'forfeit'
}

export enum Get5MapStat {
    MapName = 'mapname',
    MapWinner = 'mapwinner',
    DemoFileName = 'demo_filename'
}

export enum Get5TeamStat {
    TeamScore = 'score'
}

export enum Get5PlayerStat {
    Name = 'name',
    Kills = 'kills',
    Deaths = 'deaths',
    Assists = 'assists',
    FlashbangAssists = 'flashbang_assists',
    TeamKills = 'teamkills',
    Suicides = 'suicides',
    Damage = 'damage',
    UtilityDamage = 'util_damage',
    EnemiesFlashed = 'enemies_flashed',
    FriendliesFlashed = 'friendlies_flashed',
    KnifeKills = 'knife_kills',
    HeadshotKills = 'headshot_kills',
    RoundsPlayed = 'roundsplayed',
    BombDefuses = 'bomb_defuses',
    BombPlants = 'bomb_plants',
    OneKillRounds = '1kill_rounds',
    TwoKillRounds = '2kill_rounds',
    ThreeKillRounds = '3kill_rounds',
    FourKillRounds = '4kill_rounds',
    FiveKillRounds = '5kill_rounds',
    V1 = 'v1',
    V2 = 'v2',
    V3 = 'v3',
    V4 = 'v4',
    V5 = 'v5',
    FirstKillT = 'firstkill_t',
    FirstKillCT = 'firstkill_ct',
    FirstDeathT = 'firstdeath_t',
    FirstDeathCT = 'firstdeath_ct',
    TradeKill = 'tradekill',
    KAST = 'kast',
    ContributionScore = 'contribution_score',
    MVP = 'mvp'
}