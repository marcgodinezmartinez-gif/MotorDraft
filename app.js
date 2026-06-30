/**
 * MotorDraft - Retro Motorsport Manager
 * Core Application Script
 * Written in English (code, classes, comments)
 * UI presented in Spanish (Spain)
 */

const TRANSLATIONS = {
  es: {
    audio_on: "SONIDO: ON",
    audio_off: "SONIDO: OFF",
    menu_title: "MUNDIAL DE ESTRATEGIA F1 RETRO",
    menu_desc1: "Toma el control de tu propia escudería histórica. Selecciona chasis, motor, neumáticos y pilotos de cuatro décadas legendarias en nuestro draft inicial y compite en un mundial de 10 carreras.",
    menu_desc2: "Gestiona la degradación, decide cuándo parar en boxes y ordena a tus pilotos atacar o conservar. ¿Podrás conquistar el campeonato de constructores?",
    menu_start: "COMENZAR NUEVA TEMPORADA",
    menu_footer: "v1.0.0 - HECHO EN ESPAÑA",
    draft_round: "RONDA DRAFT",
    draft_category: "Categoría actual a elegir:",
    draft_team_status: "ESTADO DE TU ESCUDERÍA",
    slot_chassis: "CHASIS",
    slot_engine: "MOTOR",
    slot_tyres: "NEUMÁTICOS",
    slot_d1: "PILOTO 1",
    slot_d2: "PILOTO 2",
    slot_principal: "JEFE DE EQUIPO",
    slot_empty: "Vacío",
    dash_title: "TU ESCUDERÍA",
    dash_label_drivers: "Pilotos:",
    dash_label_chassis: "Chasis:",
    dash_label_engine: "Motor:",
    dash_label_tyres: "Neumáticos:",
    dash_label_principal: "Jefe Equipo:",
    dash_next_gp: "PRÓXIMA CARRERA",
    dash_stat_speed: "Velocidad",
    dash_stat_aero: "Carga Aero",
    dash_stat_wear: "Desgaste",
    dash_go_quali: "IR A CLASIFICACIÓN (QUALI)",
    dash_sim_champ: "⚡ SIMULAR CAMPEONATO COMPLETO",
    tab_drivers: "PILOTOS",
    tab_constructors: "CONSTRUCTORES",
    quali_title: "SESIÓN DE CLASIFICACIÓN",
    circuit_label: "Circuito:",
    quali_live: "EN DIRECTO",
    quali_times: "TIEMPOS DE CLASIFICACIÓN",
    th_pos: "POS",
    th_driver: "PILOTO",
    th_best_lap: "MEJOR VUELTA",
    th_gap: "DIFERENCIA",
    quali_telemetry: "TELEMETRÍA EN TIEMPO REAL",
    quali_skip: "OMITIR ANIMACIÓN",
    quali_go_strat: "IR A PLANIFICAR ESTRATEGIA",
    strat_title: "PLANIFICACIÓN DE ESTRATEGIA",
    laps_label: "vueltas",
    strat_fia_rules_title: "REGLAMENTACIÓN FIA",
    strat_rules: "⚠️ REGLA DE NEUMÁTICOS OBLIGATORIA (CARRERAS EN SECO)",
    strat_rules_desc: "Es obligatorio realizar al menos <strong>una parada en boxes</strong> y utilizar <strong>dos compuestos de seco diferentes</strong> (Blando, Medio, Duro). Si la carrera transcurre en seco y no se cumple esta norma, el monoplaza será <strong class=\"text-red\">Descalificado (DSQ)</strong> al cruzar la bandera a cuadros.",
    strat_recommended: "💡 ESTRATEGIA RECOMENDADA",
    strat_start_tyre: "Compuesto de Salida:",
    opt_soft_desc: "Blando (Seco / Rápido)",
    opt_medium_desc: "Medio (Seco / Equilibrado)",
    opt_hard_desc: "Duro (Seco / Duradero)",
    strat_pit_lap: "Vuelta de parada:",
    lbl_lap_2: "Vta 2",
    strat_next_tyre: "Compuesto tras la parada:",
    opt_soft: "Blando",
    opt_medium: "Medio",
    opt_hard: "Duro",
    opt_inter: "Intermedios",
    opt_wet: "Lluvia Extrema",
    opt_inter_desc: "Intermedios (Pista Húmeda)",
    opt_wet_desc: "Lluvia (Pista Mojada)",
    strat_confirm: "CONFIRMAR ESTRATEGIA Y COMENZAR GP",
    strat_sim_gp: "⚡ SIMULAR GP",
    story_title: "SIMULACIÓN AUTOMÁTICA",
    story_subtitle: "Campeonato en curso...",
    story_live_standings: "CLASIFICACIÓN EN VIVO",
    story_skip_btn: "SALTAR ANIMACIÓN",
    summary_title_text: "RESUMEN DE TEMPORADA",
    summary_subtitle: "Tu trayectoria en el Mundial",
    summary_share: "📱 COMPARTIR EN X",
    standings_restart: "EMPEZAR NUEVO MUNDIAL",
    race_gp_prefix: "GP DE",
    race_lap_label: "VUELTA",
    race_weather: "CLIMA:",
    race_track: "PISTA:",
    th_tyres: "NEUMÁTICOS",
    race_gap_label: "TIEMPO / BRECHA",
    race_push: "Ritmo:",
    pace_conserve_short: "CONS",
    pace_balanced_short: "BAL",
    pace_push_short: "EMP",
    race_pit_label: "Parada:",
    race_box: "BOX ESTA VTA",
    race_status_on_track: "ESTADO: EN PISTA",
    race_leaderboard_title: "TELEMETRÍA EN VIVO (POSICIONES Y DIFERENCIAS)",
    th_tyre_short: "GOMA",
    th_health: "SALUD",
    th_pitstops: "BOX",
    race_commentary_title: "COMENTARIOS DEL COMISARIO DE PISTA",
    lbl_speed: "VELOCIDAD:",
    speed_fast: "RÁPIDO",
    race_skip: "OMITIR ANIMACIÓN DE CARRERA",
    race_finish_title: "🏁 ¡BANDERA A CUADROS! 🏁",
    race_finish_desc: "La carrera ha finalizado. Verifica los resultados y las puntuaciones oficiales de la temporada.",
    race_results_btn: "VER RESULTADOS DE CARRERA",
    standings_title: "RESULTADOS DEL GP",
    th_time_status: "TIEMPO/ESTADO",
    th_points: "PUNTOS",
    standings_championship: "CLASIFICACIÓN MUNDIAL",
    th_constructor: "CONSTRUCTOR / COMPONENTES",
    standings_gp_finished_status: "Fin del GP. Prepárate para el siguiente reto del calendario.",
    standings_next: "AVANZAR AL SIGUIENTE GP",
    standings_sim_rest: "⚡ SIMULAR RESTO DEL CAMPEONATO",
    standings_view_summary: "📊 VER RESUMEN DE TEMPORADA",
  },
  en: {
    audio_on: "AUDIO: ON",
    audio_off: "AUDIO: OFF",
    menu_title: "RETRO F1 STRATEGY CHAMPIONSHIP",
    menu_desc1: "Take control of your own historic racing team. Select chassis, engine, tyres, and drivers from four legendary decades in our initial draft and compete in a 10-race world championship.",
    menu_desc2: "Manage degradation, decide when to pit, and order your drivers to push or conserve. Can you conquer the constructors' championship?",
    menu_start: "START NEW SEASON",
    menu_footer: "v1.0.0 - MADE IN SPAIN - CLIENT-SIDE ONLY",
    draft_round: "DRAFT ROUND",
    draft_category: "Current category to select:",
    draft_team_status: "YOUR TEAM STATUS",
    slot_chassis: "CHASSIS",
    slot_engine: "ENGINE",
    slot_tyres: "TYRES",
    slot_d1: "DRIVER 1",
    slot_d2: "DRIVER 2",
    slot_principal: "TEAM PRINCIPAL",
    slot_empty: "Empty",
    dash_title: "YOUR TEAM",
    dash_label_drivers: "Drivers:",
    dash_label_chassis: "Chassis:",
    dash_label_engine: "Engine:",
    dash_label_tyres: "Tyres:",
    dash_label_principal: "Team Principal:",
    dash_next_gp: "NEXT RACE",
    dash_stat_speed: "Top Speed",
    dash_stat_aero: "Downforce",
    dash_stat_wear: "Wear Rate",
    dash_go_quali: "GO TO QUALIFYING (QUALI)",
    dash_sim_champ: "⚡ SIMULATE FULL CHAMPIONSHIP",
    tab_drivers: "DRIVERS",
    tab_constructors: "CONSTRUCTORS",
    quali_title: "QUALIFYING SESSION",
    circuit_label: "Circuit:",
    quali_live: "LIVE",
    quali_times: "QUALIFYING TIMES",
    th_pos: "POS",
    th_driver: "DRIVER",
    th_best_lap: "BEST LAP",
    th_gap: "GAP",
    quali_telemetry: "REAL-TIME TELEMETRY",
    quali_skip: "SKIP ANIMATION",
    quali_go_strat: "GO TO STRATEGY PLANNING",
    strat_title: "STRATEGY PLANNING",
    laps_label: "laps",
    strat_fia_rules_title: "FIA RULES",
    strat_rules: "⚠️ MANDATORY TYRES RULE (DRY RACES)",
    strat_rules_desc: "It is mandatory to make at least <strong>one pit stop</strong> and use <strong>two different dry compounds</strong> (Soft, Medium, Hard). If the race is dry and this rule is not met, the car will be <strong class=\"text-red\">Disqualified (DSQ)</strong> when crossing the checkered flag.",
    strat_recommended: "💡 RECOMMENDED STRATEGY",
    strat_start_tyre: "Starting Compound:",
    opt_soft_desc: "Soft (Dry / Fast)",
    opt_medium_desc: "Medium (Dry / Balanced)",
    opt_hard_desc: "Hard (Dry / Durable)",
    strat_pit_lap: "Pit stop lap:",
    lbl_lap_2: "Lap 2",
    strat_next_tyre: "Compound after pit stop:",
    opt_soft: "Soft",
    opt_medium: "Medium",
    opt_hard: "Hard",
    opt_inter: "Intermediate",
    opt_wet: "Wet Weather",
    opt_inter_desc: "Intermediate (Damp Track)",
    opt_wet_desc: "Wet (Wet Track)",
    strat_confirm: "CONFIRM STRATEGY & START GP",
    strat_sim_gp: "⚡ SIMULATE GP",
    story_title: "AUTOMATIC SIMULATION",
    story_subtitle: "Championship in progress...",
    story_live_standings: "LIVE STANDINGS",
    story_skip_btn: "SKIP ANIMATION",
    summary_title_text: "SEASON SUMMARY",
    summary_subtitle: "Your journey in the World Championship",
    summary_share: "📱 SHARE ON X",
    standings_restart: "START NEW CHAMPIONSHIP",
    race_gp_prefix: "GP OF",
    race_lap_label: "LAP",
    race_weather: "WEATHER:",
    race_track: "TRACK:",
    th_tyres: "TYRES",
    race_gap_label: "TIME / GAP",
    race_push: "Pace:",
    pace_conserve_short: "CONS",
    pace_balanced_short: "BAL",
    pace_push_short: "PUSH",
    race_pit_label: "Pit Stop:",
    race_box: "BOX THIS LAP",
    race_status_on_track: "STATUS: ON TRACK",
    race_leaderboard_title: "LIVE TELEMETRY (STANDINGS & GAPS)",
    th_tyre_short: "TYRE",
    th_health: "WEAR",
    th_pitstops: "PIT",
    race_commentary_title: "STEWARDS COMMENTARY FEED",
    lbl_speed: "SPEED:",
    speed_fast: "FAST",
    race_skip: "SKIP RACE ANIMATION",
    race_finish_title: "🏁 CHECKERED FLAG! 🏁",
    race_finish_desc: "The race has finished. Verify the results and official scores of the season.",
    race_results_btn: "VIEW RACE RESULTS",
    standings_title: "GP RESULTS",
    th_time_status: "TIME/STATUS",
    th_points: "POINTS",
    standings_championship: "WORLD STANDINGS",
    th_constructor: "CONSTRUCTOR / COMPONENTS",
    standings_gp_finished_status: "End of GP. Prepare for the next race calendar challenge.",
    standings_next: "ADVANCE TO NEXT GP",
    standings_sim_rest: "⚡ SIMULATE REST OF CHAMPIONSHIP",
    standings_view_summary: "📊 VIEW SEASON SUMMARY",
  }
};

// ============================================================================
// 1. DATABASE & MODELS
// ============================================================================

const DATABASE = {
  chassis: [
    // 1990s Era
    { id: "ch_fw14b", name: "Williams FW14B", era: "1990s", aero: 10, downforce: 10, weight: 8 },
    { id: "ch_mp4_8", name: "McLaren MP4/8", era: "1990s", aero: 8, downforce: 9, weight: 8 },
    { id: "ch_412t2", name: "Ferrari 412 T2", era: "1990s", aero: 7, downforce: 8, weight: 6 },
    { id: "ch_m195", name: "Minardi M195", era: "1990s", aero: 4, downforce: 3, weight: 5 },
    { id: "ch_fg01", name: "Forti FG01", era: "1990s", aero: 2, downforce: 1, weight: 2 }, // Low tier

    // 2000s Era
    { id: "ch_f2004", name: "Ferrari F2004", era: "2000s", aero: 10, downforce: 10, weight: 9 },
    { id: "ch_r25", name: "Renault R25", era: "2000s", aero: 9, downforce: 9, weight: 9 },
    { id: "ch_mp4_20", name: "McLaren MP4-20", era: "2000s", aero: 9, downforce: 10, weight: 7 },
    { id: "ch_sa06", name: "Super Aguri SA06", era: "2000s", aero: 4, downforce: 3, weight: 4 },
    { id: "ch_ps01", name: "Minardi PS01", era: "2000s", aero: 3, downforce: 2, weight: 4 }, // Low tier

    // 2010s Era
    { id: "ch_w05", name: "Mercedes W05 Hybrid", era: "2010s", aero: 10, downforce: 9, weight: 9 },
    { id: "ch_rb9", name: "Red Bull RB9", era: "2010s", aero: 9, downforce: 10, weight: 8 },
    { id: "ch_sf70h", name: "Ferrari SF70H", era: "2010s", aero: 8, downforce: 8, weight: 8 },
    { id: "ch_ct05", name: "Caterham CT05", era: "2010s", aero: 3, downforce: 2, weight: 3 },
    { id: "ch_f111", name: "HRT F111", era: "2010s", aero: 1, downforce: 1, weight: 2 }, // Low tier

    // 2020s Era
    { id: "ch_rb19", name: "Red Bull RB19", era: "2020s", aero: 10, downforce: 10, weight: 9 },
    { id: "ch_w11", name: "Mercedes W11", era: "2020s", aero: 10, downforce: 10, weight: 8 },
    { id: "ch_f175", name: "Ferrari F1-75", era: "2020s", aero: 9, downforce: 8, weight: 8 },
    { id: "ch_fw43b", name: "Williams FW43B", era: "2020s", aero: 4, downforce: 3, weight: 5 },
    { id: "ch_vf21", name: "Haas VF-21", era: "2020s", aero: 2, downforce: 2, weight: 3 } // Low tier
  ],

  engines: [
    // 1990s Era
    { id: "eng_ren_v10_1990s", name: "Renault RS5 V10", era: "1990s", speed: 9, reliability: 8 },
    { id: "eng_fer_v12_1990s", name: "Ferrari Tipo 044", era: "1990s", speed: 8, reliability: 6 },
    { id: "eng_cos_v8_1990s", name: "Ford Cosworth HB", era: "1990s", speed: 6, reliability: 8 },
    { id: "eng_yam_v10_1990s", name: "Yamaha OX10 V10", era: "1990s", speed: 4, reliability: 3 }, // Low

    // 2000s Era
    { id: "eng_fer_v10_00s", name: "Ferrari Tipo 053 V10", era: "2000s", speed: 10, reliability: 9 },
    { id: "eng_ren_v10_00s", name: "Renault RS25 V10", era: "2000s", speed: 8, reliability: 9 },
    { id: "eng_mer_v10_00s", name: "Mercedes FO 110R V10", era: "2000s", speed: 9, reliability: 7 },
    { id: "eng_cos_v10_00s", name: "Cosworth CR-3 V10", era: "2000s", speed: 5, reliability: 6 }, // Low

    // 2010s Era
    { id: "eng_mer_v6_10s", name: "Mercedes PU106A V6T", era: "2010s", speed: 10, reliability: 10 },
    { id: "eng_fer_v6_10s", name: "Ferrari 059/3 V6T", era: "2010s", speed: 7, reliability: 8 },
    { id: "eng_ren_v6_10s", name: "Renault Energy V6T", era: "2010s", speed: 6, reliability: 5 },
    { id: "eng_cos_v8_10s", name: "Cosworth CA2010 V8", era: "2010s", speed: 4, reliability: 5 }, // Low

    // 2020s Era
    { id: "eng_hon_v6_20s", name: "Honda RBPTH001 V6T", era: "2020s", speed: 10, reliability: 9 },
    { id: "eng_mer_v6_20s", name: "Mercedes-AMG M12 V6T", era: "2020s", speed: 9, reliability: 10 },
    { id: "eng_fer_v6_20s", name: "Ferrari 066/7 V6T", era: "2020s", speed: 9, reliability: 8 },
    { id: "eng_ren_v6_20s", name: "Renault E-Tech V6T", era: "2020s", speed: 7, reliability: 6 },
    { id: "eng_fer_client_20s", name: "Ferrari Clienti V6T", era: "2020s", speed: 5, reliability: 6 } // Low
  ],

  tyres: [
    // 1990s Era
    { id: "tyr_gy_1990s", name: "Goodyear Eagle", era: "1990s", wearRate: 8, tempWindow: 7 },
    { id: "tyr_bs_1990s", name: "Bridgestone Potenza 1990s", era: "1990s", wearRate: 9, tempWindow: 8 },

    // 2000s Era
    { id: "tyr_bs_00s", name: "Bridgestone Potenza 00s", era: "2000s", wearRate: 9, tempWindow: 9 },
    { id: "tyr_mi_00s", name: "Michelin F1 Sport", era: "2000s", wearRate: 8, tempWindow: 8 },

    // 2010s Era
    { id: "tyr_pi_10s", name: "Pirelli P Zero 10s", era: "2010s", wearRate: 6, tempWindow: 5 },
    { id: "tyr_av_10s", name: "Avon Racing Tyres", era: "2010s", wearRate: 4, tempWindow: 4 }, // Low

    // 2020s Era
    { id: "tyr_pi_20s", name: "Pirelli P Zero 20s", era: "2020s", wearRate: 7, tempWindow: 6 },
    { id: "tyr_hk_20s", name: "Hankook Ventus F1", era: "2020s", wearRate: 8, tempWindow: 7 }
  ],

  drivers: [
    // --- ELITE TIER (Champions / Legends) ---
    { id: "dr_senna_1990s", baseId: "Ayrton Senna", name: "A. Senna (1990s)", era: "1990s", quali: 10, racePace: 10, tyreMgmt: 8, consistency: 8 },
    { id: "dr_prost_1990s", baseId: "Alain Prost", name: "A. Prost (1990s)", era: "1990s", quali: 8, racePace: 10, tyreMgmt: 10, consistency: 10 },
    { id: "dr_schumacher_00s", baseId: "Michael Schumacher", name: "M. Schumacher (2000s)", era: "2000s", quali: 10, racePace: 10, tyreMgmt: 9, consistency: 10 },
    { id: "dr_alonso_00s", baseId: "Fernando Alonso", name: "F. Alonso (2000s)", era: "2000s", quali: 9, racePace: 10, tyreMgmt: 10, consistency: 10 },
    { id: "dr_hamilton_10s", baseId: "Lewis Hamilton", name: "L. Hamilton (2010s)", era: "2010s", quali: 10, racePace: 10, tyreMgmt: 9, consistency: 9 },
    { id: "dr_verstappen_20s", baseId: "Max Verstappen", name: "M. Verstappen (2020s)", era: "2020s", quali: 10, racePace: 10, tyreMgmt: 9, consistency: 10 },

    // --- VERY GOOD TIER (Championship Contenders / Top-tier Winners) ---
    { id: "dr_schumacher_1990s", baseId: "Michael Schumacher", name: "M. Schumacher (1990s)", era: "1990s", quali: 9, racePace: 9, tyreMgmt: 8, consistency: 9 },
    { id: "dr_hakkinen_1990s", baseId: "Mika Hakkinen", name: "M. Häkkinen (1990s)", era: "1990s", quali: 9, racePace: 9, tyreMgmt: 7, consistency: 8 },
    { id: "dr_hill_1990s", baseId: "Damon Hill", name: "D. Hill (1990s)", era: "1990s", quali: 8, racePace: 8, tyreMgmt: 8, consistency: 8 },
    { id: "dr_alonso_10s", baseId: "Fernando Alonso", name: "F. Alonso (2010s)", era: "2010s", quali: 8, racePace: 9, tyreMgmt: 9, consistency: 9 },
    { id: "dr_alonso_20s", baseId: "Fernando Alonso", name: "F. Alonso (2020s)", era: "2020s", quali: 8, racePace: 9, tyreMgmt: 9, consistency: 9 },
    { id: "dr_raikkonen_00s", baseId: "Kimi Raikkonen", name: "K. Räikkönen (2000s)", era: "2000s", quali: 9, racePace: 9, tyreMgmt: 8, consistency: 8 },
    { id: "dr_hamilton_00s", baseId: "Lewis Hamilton", name: "L. Hamilton (2000s)", era: "2000s", quali: 8, racePace: 8, tyreMgmt: 7, consistency: 8 },
    { id: "dr_hamilton_20s", baseId: "Lewis Hamilton", name: "L. Hamilton (2020s)", era: "2020s", quali: 8, racePace: 8, tyreMgmt: 8, consistency: 9 },
    { id: "dr_vettel_10s", baseId: "Sebastian Vettel", name: "S. Vettel (2010s)", era: "2010s", quali: 9, racePace: 9, tyreMgmt: 8, consistency: 8 },
    { id: "dr_montoya_00s", baseId: "Juan Pablo Montoya", name: "J.P. Montoya (2000s)", era: "2000s", quali: 9, racePace: 8, tyreMgmt: 6, consistency: 7 },
    { id: "dr_rosberg_10s", baseId: "Nico Rosberg", name: "N. Rosberg (2010s)", era: "2010s", quali: 9, racePace: 8, tyreMgmt: 8, consistency: 9 },
    { id: "dr_verstappen_10s", baseId: "Max Verstappen", name: "M. Verstappen (2010s)", era: "2010s", quali: 8, racePace: 8, tyreMgmt: 7, consistency: 8 },
    { id: "dr_leclerc_20s", baseId: "Charles Leclerc", name: "C. Leclerc (2020s)", era: "2020s", quali: 9, racePace: 8, tyreMgmt: 7, consistency: 8 },
    { id: "dr_norris_20s", baseId: "Lando Norris", name: "L. Norris (2020s)", era: "2020s", quali: 9, racePace: 9, tyreMgmt: 8, consistency: 9 },
    { id: "dr_russell_20s", baseId: "George Russell", name: "G. Russell (2020s)", era: "2020s", quali: 8, racePace: 8, tyreMgmt: 7, consistency: 8 },
    { id: "dr_sainz_20s", baseId: "Carlos Sainz", name: "C. Sainz (2020s)", era: "2020s", quali: 8, racePace: 8, tyreMgmt: 8, consistency: 9 },

    // --- SOLID MIDFIELD TIER (Race Winners / Solid Podiums) ---
    { id: "dr_schumacher_10s", baseId: "Michael Schumacher", name: "M. Schumacher (2010s)", era: "2010s", quali: 6, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_alesi_1990s", baseId: "Jean Alesi", name: "J. Alesi (1990s)", era: "1990s", quali: 7, racePace: 7, tyreMgmt: 6, consistency: 6 },
    { id: "dr_berger_1990s", baseId: "Gerhard Berger", name: "G. Berger (1990s)", era: "1990s", quali: 8, racePace: 7, tyreMgmt: 6, consistency: 7 },
    { id: "dr_barrichello_1990s", baseId: "Rubens Barrichello", name: "R. Barrichello (1990s)", era: "1990s", quali: 7, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_barrichello_00s", baseId: "Rubens Barrichello", name: "R. Barrichello (2000s)", era: "2000s", quali: 8, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_raikkonen_10s", baseId: "Kimi Raikkonen", name: "K. Räikkönen (2010s)", era: "2010s", quali: 7, racePace: 7, tyreMgmt: 8, consistency: 8 },
    { id: "dr_vettel_00s", baseId: "Sebastian Vettel", name: "S. Vettel (2000s)", era: "2000s", quali: 7, racePace: 7, tyreMgmt: 7, consistency: 7 },
    { id: "dr_vettel_20s", baseId: "Sebastian Vettel", name: "S. Vettel (2020s)", era: "2020s", quali: 6, racePace: 6, tyreMgmt: 7, consistency: 8 },
    { id: "dr_button_00s", baseId: "Jenson Button", name: "J. Button (2000s)", era: "2000s", quali: 7, racePace: 7, tyreMgmt: 8, consistency: 8 },
    { id: "dr_button_10s", baseId: "Jenson Button", name: "J. Button (2010s)", era: "2010s", quali: 6, racePace: 8, tyreMgmt: 9, consistency: 9 },
    { id: "dr_massa_00s", baseId: "Felipe Massa", name: "F. Massa (2000s)", era: "2000s", quali: 8, racePace: 7, tyreMgmt: 6, consistency: 7 },
    { id: "dr_massa_10s", baseId: "Felipe Massa", name: "F. Massa (2010s)", era: "2010s", quali: 6, racePace: 6, tyreMgmt: 7, consistency: 8 },
    { id: "dr_ricciardo_10s", baseId: "Daniel Ricciardo", name: "D. Ricciardo (2010s)", era: "2010s", quali: 8, racePace: 8, tyreMgmt: 7, consistency: 8 },
    { id: "dr_ricciardo_20s", baseId: "Daniel Ricciardo", name: "D. Ricciardo (2020s)", era: "2020s", quali: 6, racePace: 5, tyreMgmt: 6, consistency: 7 },
    { id: "dr_bottas_10s", baseId: "Valtteri Bottas", name: "V. Bottas (2010s)", era: "2010s", quali: 8, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_bottas_20s", baseId: "Valtteri Bottas", name: "V. Bottas (2020s)", era: "2020s", quali: 7, racePace: 6, tyreMgmt: 7, consistency: 8 },
    { id: "dr_leclerc_10s", baseId: "Charles Leclerc", name: "C. Leclerc (2010s)", era: "2010s", quali: 8, racePace: 7, tyreMgmt: 7, consistency: 7 },
    { id: "dr_sainz_10s", baseId: "Carlos Sainz", name: "C. Sainz (2010s)", era: "2010s", quali: 7, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_perez_10s", baseId: "Sergio Perez", name: "S. Pérez (2010s)", era: "2010s", quali: 6, racePace: 7, tyreMgmt: 8, consistency: 8 },
    { id: "dr_perez_20s", baseId: "Sergio Perez", name: "S. Pérez (2020s)", era: "2020s", quali: 6, racePace: 7, tyreMgmt: 8, consistency: 7 },
    { id: "dr_coulthard_1990s", baseId: "David Coulthard", name: "D. Coulthard (1990s)", era: "1990s", quali: 8, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_coulthard_00s", baseId: "David Coulthard", name: "D. Coulthard (2000s)", era: "2000s", quali: 7, racePace: 7, tyreMgmt: 8, consistency: 8 },
    { id: "dr_webber_00s", baseId: "Mark Webber", name: "M. Webber (2000s)", era: "2000s", quali: 7, racePace: 6, tyreMgmt: 7, consistency: 7 },
    { id: "dr_webber_10s", baseId: "Mark Webber", name: "M. Webber (2010s)", era: "2010s", quali: 8, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_irvine_1990s", baseId: "Eddie Irvine", name: "E. Irvine (1990s)", era: "1990s", quali: 7, racePace: 7, tyreMgmt: 6, consistency: 7 },
    { id: "dr_kubica_00s", baseId: "Robert Kubica", name: "R. Kubica (2000s)", era: "2000s", quali: 8, racePace: 8, tyreMgmt: 7, consistency: 8 },
    { id: "dr_kubica_10s", baseId: "Robert Kubica", name: "R. Kubica (2010s)", era: "2010s", quali: 5, racePace: 5, tyreMgmt: 6, consistency: 7 },
    { id: "dr_fisichella_1990s", baseId: "Giancarlo Fisichella", name: "G. Fisichella (1990s)", era: "1990s", quali: 7, racePace: 7, tyreMgmt: 6, consistency: 7 },
    { id: "dr_fisichella_00s", baseId: "Giancarlo Fisichella", name: "G. Fisichella (2000s)", era: "2000s", quali: 7, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_trulli_00s", baseId: "Jarno Trulli", name: "J. Trulli (2000s)", era: "2000s", quali: 9, racePace: 6, tyreMgmt: 6, consistency: 8 },
    { id: "dr_delarosa_00s", baseId: "Pedro de la Rosa", name: "P. de la Rosa (2000s)", era: "2000s", quali: 6, racePace: 7, tyreMgmt: 8, consistency: 8 },
    { id: "dr_gene_1990s", baseId: "Marc Gene", name: "M. Gené (1990s)", era: "1990s", quali: 5, racePace: 5, tyreMgmt: 6, consistency: 8 },
    { id: "dr_alguersuari_10s", baseId: "Jaime Alguersuari", name: "J. Alguersuari (2010s)", era: "2010s", quali: 6, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_gasly_20s", baseId: "Pierre Gasly", name: "P. Gasly (2020s)", era: "2020s", quali: 7, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_ocon_20s", baseId: "Esteban Ocon", name: "E. Ocon (2020s)", era: "2020s", quali: 7, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_albon_20s", baseId: "Alexander Albon", name: "A. Albon (2020s)", era: "2020s", quali: 7, racePace: 7, tyreMgmt: 7, consistency: 8 },
    { id: "dr_tsunoda_20s", baseId: "Yuki Tsunoda", name: "Y. Tsunoda (2020s)", era: "2020s", quali: 7, racePace: 6, tyreMgmt: 6, consistency: 7 },

    // --- LOW TIER & BACKMARKERS (Low Stats / Aggressive memes / Low Performance) ---
    { id: "dr_maldonado_10s", baseId: "Pastor Maldonado", name: "P. Maldonado (2010s)", era: "2010s", quali: 7, racePace: 7, tyreMgmt: 4, consistency: 2 },
    { id: "dr_stroll_20s", baseId: "Lance Stroll", name: "L. Stroll (2020s)", era: "2020s", quali: 4, racePace: 5, tyreMgmt: 5, consistency: 5 },
    { id: "dr_latifi_20s", baseId: "Nicholas Latifi", name: "N. Latifi (2020s)", era: "2020s", quali: 2, racePace: 3, tyreMgmt: 4, consistency: 4 },
    { id: "dr_mazepin_20s", baseId: "Nikita Mazepin", name: "N. Mazepin (2020s)", era: "2020s", quali: 2, racePace: 1, tyreMgmt: 2, consistency: 3 },
    { id: "dr_karthikeyan_10s", baseId: "Narain Karthikeyan", name: "N. Karthikeyan (2010s)", era: "2010s", quali: 2, racePace: 2, tyreMgmt: 3, consistency: 5 },
    { id: "dr_chandhok_10s", baseId: "Karun Chandhok", name: "K. Chandhok (2010s)", era: "2010s", quali: 2, racePace: 2, tyreMgmt: 4, consistency: 5 },
    { id: "dr_ide_00s", baseId: "Yuji Ide", name: "Y. Ide (2000s)", era: "2000s", quali: 1, racePace: 1, tyreMgmt: 2, consistency: 2 },
    { id: "dr_inoue_1990s", baseId: "Taki Inoue", name: "T. Inoue (1990s)", era: "1990s", quali: 1, racePace: 1, tyreMgmt: 1, consistency: 2 },
    { id: "dr_badoer_00s", baseId: "Luca Badoer", name: "L. Badoer (2000s)", era: "2000s", quali: 3, racePace: 3, tyreMgmt: 4, consistency: 6 },
    { id: "dr_mazzacane_00s", baseId: "Gaston Mazzacane", name: "G. Mazzacane (2000s)", era: "2000s", quali: 3, racePace: 3, tyreMgmt: 4, consistency: 5 },
    { id: "dr_rosset_1990s", baseId: "Ricardo Rosset", name: "R. Rosset (1990s)", era: "1990s", quali: 1, racePace: 2, tyreMgmt: 3, consistency: 3 },
    { id: "dr_merhi_10s", baseId: "Roberto Merhi", name: "R. Merhi (2010s)", era: "2010s", quali: 4, racePace: 4, tyreMgmt: 5, consistency: 6 },
    { id: "dr_stevens_10s", baseId: "Will Stevens", name: "W. Stevens (2010s)", era: "2010s", quali: 4, racePace: 4, tyreMgmt: 4, consistency: 7 },
    { id: "dr_haryanto_10s", baseId: "Rio Haryanto", name: "R. Haryanto (2010s)", era: "2010s", quali: 3, racePace: 3, tyreMgmt: 4, consistency: 5 },
    { id: "dr_chilton_10s", baseId: "Max Chilton", name: "M. Chilton (2010s)", era: "2010s", quali: 3, racePace: 3, tyreMgmt: 5, consistency: 8 },
    { id: "dr_speed_00s", baseId: "Scott Speed", name: "S. Speed (2000s)", era: "2000s", quali: 5, racePace: 5, tyreMgmt: 5, consistency: 5 },
    { id: "dr_albers_00s", baseId: "Christijan Albers", name: "C. Albers (2000s)", era: "2000s", quali: 4, racePace: 4, tyreMgmt: 4, consistency: 5 }
  ],

  principals: [
    // 1990s Era
    { id: "pr_dennis_1990s", name: "Ron Dennis", era: "1990s", pitBonus: 8, strategyBonus: 9 },
    { id: "pr_briatore_1990s", name: "Flavio Briatore", era: "1990s", pitBonus: 7, strategyBonus: 8 },
    { id: "pr_williams_1990s", name: "Frank Williams", era: "1990s", pitBonus: 8, strategyBonus: 8 },
    { id: "pr_jordan_1990s", name: "Eddie Jordan", era: "1990s", pitBonus: 6, strategyBonus: 7 },

    // 2000s Era
    { id: "pr_todt_00s", name: "Jean Todt", era: "2000s", pitBonus: 9, strategyBonus: 10 },
    { id: "pr_brawn_00s", name: "Ross Brawn", era: "2000s", pitBonus: 9, strategyBonus: 10 },
    { id: "pr_stoddart_00s", name: "Paul Stoddart", era: "2000s", pitBonus: 5, strategyBonus: 6 },
    { id: "pr_kolles_00s", name: "Colin Kolles", era: "2000s", pitBonus: 3, strategyBonus: 3 }, // Low

    // 2010s Era
    { id: "pr_horner_10s", name: "Christian Horner", era: "2010s", pitBonus: 9, strategyBonus: 9 },
    { id: "pr_wolff_10s", name: "Toto Wolff", era: "2010s", pitBonus: 9, strategyBonus: 9 },
    { id: "pr_boullier_10s", name: "Eric Boullier", era: "2010s", pitBonus: 6, strategyBonus: 5 },
    { id: "pr_kaltenborn_10s", name: "Monisha Kaltenborn", era: "2010s", pitBonus: 5, strategyBonus: 5 }, // Low

    // 2020s Era
    { id: "pr_vowles_20s", name: "James Vowles", era: "2020s", pitBonus: 8, strategyBonus: 8 },
    { id: "pr_stella_20s", name: "Andrea Stella", era: "2020s", pitBonus: 8, strategyBonus: 8 },
    { id: "pr_krack_20s", name: "Mike Krack", era: "2020s", pitBonus: 7, strategyBonus: 7 },
    { id: "pr_steiner_20s", name: "Günther Steiner", era: "2020s", pitBonus: 5, strategyBonus: 6 } // Memorable
  ]
};

const CIRCUITS_POOL = [
  { name: "Monza", country: "Italia", baseTime: 75.0, engineDemand: 1.5, aeroDemand: 0.5, abrasion: 0.9, desc: "Templo de la velocidad. Exige la máxima potencia de motor en rectas infinitas." },
  { name: "Mónaco", country: "Mónaco", baseTime: 72.0, engineDemand: 0.5, aeroDemand: 1.5, abrasion: 0.6, desc: "Calles reviradas y estrechas. Prioriza carga aerodinámica alta y maniobrabilidad." },
  { name: "Spa-Francorchamps", country: "Bélgica", baseTime: 104.0, engineDemand: 1.3, aeroDemand: 1.0, abrasion: 1.2, desc: "Pista técnica y larga. Sectores rápidos con Eau Rouge y exigencia media-alta." },
  { name: "Silverstone", country: "Reino Unido", baseTime: 87.0, engineDemand: 1.1, aeroDemand: 1.3, abrasion: 1.4, desc: "Cuna del motor. Curvas ultra rápidas con asfalto abrasivo que destroza neumáticos." },
  { name: "Suzuka", country: "Japón", baseTime: 91.0, engineDemand: 1.0, aeroDemand: 1.4, abrasion: 1.2, desc: "Trazado único en forma de ocho. Curvas enlazadas muy técnicas de fuerzas G elevadas." },
  { name: "Barcelona-Catalunya", country: "España", baseTime: 78.0, engineDemand: 0.9, aeroDemand: 1.2, abrasion: 1.5, desc: "Pista de pruebas clásica. El asfalto caluroso deteriora rápidamente los neumáticos." },
  { name: "Baku", country: "Azerbaiyán", baseTime: 100.0, engineDemand: 1.4, aeroDemand: 0.6, abrasion: 1.0, desc: "Recta de meta gigantesca acoplada a un sector del castillo extremadamente estrecho." },
  { name: "Singapur", country: "Singapur", baseTime: 99.0, engineDemand: 0.6, aeroDemand: 1.4, abrasion: 1.1, desc: "Circuito urbano nocturno. Altísima humedad y baches constantes que desafían chasis." },
  { name: "Spielberg", country: "Austria", baseTime: 65.0, engineDemand: 1.2, aeroDemand: 0.8, abrasion: 1.0, desc: "Vuelta muy corta. Elevación de montaña que favorece aceleración y frenada potente." },
  { name: "Hungaroring", country: "Hungría", baseTime: 76.0, engineDemand: 0.7, aeroDemand: 1.3, abrasion: 1.0, desc: "Pista revirada sin respiro. Se le conoce como un kartódromo gigante de F1." },
  { name: "Zandvoort", country: "Países Bajos", baseTime: 71.0, engineDemand: 0.8, aeroDemand: 1.3, abrasion: 1.2, desc: "Curvas peraltadas junto a la playa. Arena y carga aerodinámica de mucha precisión." },
  { name: "Las Vegas", country: "Estados Unidos", baseTime: 93.0, engineDemand: 1.4, aeroDemand: 0.5, abrasion: 0.8, desc: "Carrera nocturna urbana. Rectas de fondo donde los neumáticos pierden temperatura." },
  { name: "Marina Bay", country: "Singapur", baseTime: 98.0, engineDemand: 0.6, aeroDemand: 1.4, abrasion: 1.1, desc: "Frenadas brutales en calles estrechas. Calentamiento extremo del motor." },
  { name: "Baréin", country: "Baréin", baseTime: 92.0, engineDemand: 1.2, aeroDemand: 0.9, abrasion: 1.3, desc: "Arena en pista y tracción dura. Desgaste térmico alto debido al calor del desierto." },
  { name: "Interlagos", country: "Brasil", baseTime: 70.0, engineDemand: 1.1, aeroDemand: 0.9, abrasion: 1.1, desc: "En sentido antihorario. Trazado mixto de altura con climatología variable." }
];

const CIRCUIT_TRANSLATIONS = {
  en: {
    "Monza": { desc: "Temple of speed. Requires maximum engine power on infinite straights.", country: "Italy" },
    "Mónaco": { desc: "Twisty and narrow streets. Prioritizes high aero load and agility.", country: "Monaco" },
    "Spa-Francorchamps": { desc: "Technical and long track. Fast sectors with Eau Rouge and medium-high demands.", country: "Belgium" },
    "Silverstone": { desc: "Cradle of motorsport. Ultra-fast corners with abrasive asphalt that tears tyres.", country: "United Kingdom" },
    "Suzuka": { desc: "Unique figure-eight layout. Very technical linked corners with high G-forces.", country: "Japan" },
    "Barcelona-Catalunya": { desc: "Classic test track. Hot asphalt deteriorates tyres quickly.", country: "Spain" },
    "Baku": { desc: "Gigantic main straight paired with an extremely narrow castle sector.", country: "Azerbaijan" },
    "Singapur": { desc: "Night street circuit. Very high humidity and constant bumps challenging the chassis.", country: "Singapore" },
    "Spielberg": { desc: "Very short lap. Mountain elevation favors acceleration and heavy braking.", country: "Austria" },
    "Hungaroring": { desc: "Twisty track with no respite. Often described as a giant F1 karting track.", country: "Hungary" },
    "Zandvoort": { desc: "Banked corners by the beach. Sand and high aero precision.", country: "Netherlands" },
    "Las Vegas": { desc: "Urban night race. Long straights where tyres lose temperature.", country: "United States" },
    "Marina Bay": { desc: "Brutal braking in narrow streets. Extreme engine heating.", country: "Singapore" },
    "Baréin": { desc: "Sand on track and hard traction. High thermal wear due to desert heat.", country: "Bahrain" },
    "Interlagos": { desc: "Anti-clockwise track. Mixed high-altitude layout with variable weather.", country: "Brazil" }
  }
};

function getCircuitDetails(circuit) {
  const lang = (window.app && window.app.lang) ? window.app.lang : 'es';
  if (lang === 'en' && CIRCUIT_TRANSLATIONS.en[circuit.name]) {
    return {
      name: circuit.name === "Mónaco" ? "Monaco" : (circuit.name === "Baréin" ? "Bahrain" : (circuit.name === "Singapur" ? "Singapore" : circuit.name)),
      country: CIRCUIT_TRANSLATIONS.en[circuit.name].country,
      desc: CIRCUIT_TRANSLATIONS.en[circuit.name].desc
    };
  }
  return {
    name: circuit.name,
    country: circuit.country,
    desc: circuit.desc
  };
}

const FIA_POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

// ============================================================================
// 2. 8-BIT AUDIO SYNTHESIZER
// ============================================================================

class SoundSynth {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn("Web Audio API not supported", e);
      }
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.ctx && !this.enabled) {
      this.ctx.suspend();
    } else if (this.ctx && this.enabled) {
      this.ctx.resume();
    }
    return this.enabled;
  }

  playTone(freq, type, duration, slideTo = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type; // 'sine', 'square', 'sawtooth', 'triangle'
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      if (slideTo > 0) {
        osc.frequency.exponentialRampToValueAtTime(slideTo, this.ctx.currentTime + duration);
      }

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.error("Failed to play audio tone", e);
    }
  }

  playClick() {
    this.playTone(850, 'square', 0.04);
  }

  playSelect() {
    this.playTone(400, 'square', 0.15, 900);
  }

  playOvertake() {
    this.playTone(550, 'triangle', 0.22, 1100);
  }

  playDnf() {
    this.playTone(280, 'sawtooth', 0.45, 80);
  }

  playPitStop() {
    this.playTone(180, 'square', 0.08);
    setTimeout(() => this.playTone(280, 'square', 0.08), 70);
    setTimeout(() => this.playTone(380, 'square', 0.12), 140);
  }

  playCheckered() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'square', 0.18);
      }, idx * 140);
    });
  }
}

// Global Sound Instance
const synth = new SoundSynth();

// ============================================================================
// 3. GAME STATE MANAGEMENT
// ============================================================================

class Team {
  constructor(name, isPlayer = false) {
    this.name = name;
    this.isPlayer = isPlayer;
    this.chassis = null;
    this.engine = null;
    this.tyres = null;
    this.principal = null;
    this.drivers = [];
  }
}

class Championship {
  constructor() {
    this.seasonCircuits = [];
    this.currentRaceIndex = 0; // 0 to 9
    this.teams = [];
    this.driversStandings = [];     // Array of { baseId, name, era, teamName, points, wins, podiums, poles }
    this.constructorsStandings = []; // Array of { teamName, points, componentsDesc }
  }

  generateCalendar() {
    // Pick 10 random circuits from the pool
    const shuffled = [...CIRCUITS_POOL].sort(() => Math.random() - 0.5);
    this.seasonCircuits = shuffled.slice(0, 10);
  }

  initStandings() {
    this.driversStandings = [];
    this.constructorsStandings = [];

    // Initialize all drivers (2 per team, 10 teams = 20 drivers)
    this.teams.forEach(team => {
      team.drivers.forEach(driver => {
        this.driversStandings.push({
          baseId: driver.baseId,
          name: driver.name,
          era: driver.era,
          teamName: team.name,
          points: 0,
          wins: 0,
          podiums: 0,
          poles: 0
        });
      });

      // Initialize constructors
      const compDesc = `${team.chassis.name} [${team.engine.name}]`;
      this.constructorsStandings.push({
        teamName: team.name,
        points: 0,
        componentsDesc: compDesc
      });
    });
  }

  awardPoints(raceResult) {
    if (window.app && window.app.simulator && window.app.simulator.pointsAwardedThisGP) {
      return;
    }
    if (window.app && window.app.simulator) {
      window.app.simulator.pointsAwardedThisGP = true;
    }

    // raceResult is sorted array of 20 race participant instances
    // P1 get index 0, P2 get index 1, etc.
    raceResult.forEach((participant, idx) => {
      if (participant.status === 'dnf' || participant.status === 'dsq') return; // DNFs/DSQs cannot score points

      const pos = idx + 1;
      const points = pos <= 10 ? FIA_POINTS[pos - 1] : 0;

      if (points > 0) {
        // Add to driver standings
        const drStanding = this.driversStandings.find(d => d.baseId === participant.driver.baseId);
        if (drStanding) {
          drStanding.points += points;
          if (pos === 1) drStanding.wins += 1;
          if (pos <= 3) drStanding.podiums += 1;
        }

        // Add to constructor standings
        const constStanding = this.constructorsStandings.find(c => c.teamName === participant.team.name);
        if (constStanding) {
          constStanding.points += points;
        }
      }
    });

    // Award pole statistics
    const poleDriver = raceResult[0]; // Wait, we award pole based on Quali, not race finish!
    // We will hook this when Quali simulation completes.

    this.sortStandings();
  }

  awardPole(driverBaseId) {
    const drStanding = this.driversStandings.find(d => d.baseId === driverBaseId);
    if (drStanding) {
      drStanding.poles += 1;
    }
  }

  sortStandings() {
    // Sort Drivers by points, then wins, then podiums
    this.driversStandings.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.wins !== a.wins) return b.wins - a.wins;
      return b.podiums - a.podiums;
    });

    // Sort Constructors by points
    this.constructorsStandings.sort((a, b) => b.points - a.points);
  }

  getCurrentCircuit() {
    return this.seasonCircuits[this.currentRaceIndex];
  }
}

// ============================================================================
// 4. SIMULATOR LOGIC
// ============================================================================

class RaceSimulator {
  constructor(championship) {
    this.championship = championship;
    this.circuit = null;

    // Quali state
    this.qualiTimer = 600; // 10 minutes in virtual seconds
    this.qualiIntervalId = null;
    this.qualiStandings = []; // Array of { driver, team, bestLap: number, currentLapTime, sectorTimes: [s1, s2, s3], state: 'in_pits' | 'out_lap' | 'flying_lap' }
    this.qualiActive = false;

    // Race state
    this.raceLaps = 20;
    this.currentLap = 0;
    this.raceActive = false;
    this.participants = []; // Array of participant instances
    this.raceIntervalId = null;
    this.speedMultiplier = 1; // 1x, 3x, 10x
    this.raceCommentary = [];

    // Weather state
    this.weather = 'soleado'; // 'soleado', 'nublado', 'lluvia_ligera', 'lluvia_fuerte'
    this.trackWetness = 0.0;  // 0.0 to 1.0
    this.weatherSequence = [];
  }

  generateWeatherSequence() {
    const name = this.circuit.name;
    const rainProb = name === "Spa-Francorchamps" ? 0.6 : (name === "Silverstone" ? 0.40 : (name === "Interlagos" ? 0.35 : (name === "Singapur" || name === "Marina Bay" ? 0.25 : 0.15)));
    const willRain = Math.random() < rainProb;

    const seq = [];
    let current = 'soleado';

    const rainStart = willRain ? Math.floor(4 + Math.random() * (this.raceLaps - 8)) : 999;
    const rainDuration = willRain ? Math.floor(4 + Math.random() * 6) : 0;

    for (let lap = 1; lap <= this.raceLaps; lap++) {
      if (lap >= rainStart && lap < rainStart + rainDuration) {
        if (lap === rainStart) current = 'nublado';
        else if (lap === rainStart + 1) current = 'lluvia_ligera';
        else if (lap < rainStart + rainDuration - 1) current = Math.random() < 0.45 ? 'lluvia_fuerte' : 'lluvia_ligera';
        else current = 'lluvia_ligera';
      } else if (lap >= rainStart + rainDuration && rainStart !== 999) {
        if (lap === rainStart + rainDuration) current = 'nublado';
        else current = 'soleado';
      } else {
        current = Math.random() < 0.85 ? 'soleado' : 'nublado';
      }
      seq.push(current);
    }
    return seq;
  }

  triggerRadioMessage(participant, eventType) {
    let personality = 'standard';
    if (participant.driver.consistency < 6) personality = 'aggressive';
    else if (participant.driver.consistency >= 8 && participant.driver.tyreMgmt >= 8) personality = 'analytical';

    if (participant.driver.quali <= 3) personality = 'low_perf';

    const lang = (window.app && window.app.lang) ? window.app.lang : 'es';

    const messages = {
      es: {
        tyre_wear: {
          aggressive: "¡Las ruedas traseras se están desintegrando! ¡Metedme en boxes ya o acabaré en el muro!",
          analytical: "La degradación del neumático izquierdo está sobre el límite. Recomiendo preparar parada pronto.",
          standard: "He perdido casi todo el agarre. Los neumáticos están al límite, necesito cambiarlos.",
          low_perf: "¡El coche es inconducible! ¡Resbalo en todas partes! ¡Quiero gomas nuevas ya!"
        },
        rain: {
          aggressive: "¡Está lloviendo! ¡Vamos a montar intermedios y adelantar a todos!",
          analytical: "Gotas en el visor. Humedad en pista subiendo. Monitoreemos el punto de transición.",
          standard: "Empieza a llover bastante. Debemos preparar neumáticos de agua si esto sigue así.",
          low_perf: "¡Ay Dios, está lloviendo! ¡El coche patina mucho! ¡No quiero chocar!"
        },
        dry: {
          aggressive: "¡La pista se ha secado! ¡Ponedme los secos más rápidos que tengáis!",
          analytical: "Aparece carril seco en trazada. Las gomas de lluvia se están sobrecalentando. Caja en esta vuelta.",
          standard: "La pista se está secando muy rápido. Es hora de volver a los neumáticos secos.",
          low_perf: "Creo que ya está seco, pero el coche sigue asustándome en las curvas."
        },
        focus_push: {
          aggressive: "¡Estoy atacando a tope! ¡Dejadme correr!",
          analytical: "Entendido, incrementando vueltas del motor y forzando ritmo de calificación.",
          standard: "Aumentando el ritmo. Empujaré todo lo posible.",
          low_perf: "Intentaré ir más rápido, ¡pero no prometo no dar un trompo!"
        },
        box: {
          aggressive: "¡Box, box! Entrando caliente. ¡Haced una parada rápida!",
          analytical: "Entendido. Entrando a boxes en esta vuelta. Confirmad configuración del ala delantera.",
          standard: "Recibido. Box en esta vuelta para cambio de neumáticos.",
          low_perf: "Entendido, voy para allá. Por favor, tened listas las gomas correctas."
        },
        pit_stop: {
          aggressive: "¡Box, box! Entrando caliente. ¡Haced una parada rápida!",
          analytical: "Entendido. Entrando a boxes en esta vuelta. Confirmad configuración del ala delantera.",
          standard: "Recibido. Box en esta vuelta para cambio de neumáticos.",
          low_perf: "Entendido, voy para allá. Por favor, tened listas las gomas correctas."
        },
        dnf: {
          aggressive: "¡Nooooo! ¡Qué desastre! ¡El motor ha estallado! ¡Vaya fiabilidad de mierda!",
          analytical: "Pérdida de presión hidráulica. Confirmada rotura. Lo siento por el equipo.",
          standard: "Tengo que parar el coche. Pérdida total de potencia. Fin de la carrera.",
          low_perf: "¡Oh no! Algo ha hecho 'crack' y hay mucho humo. Creo que nos retiramos."
        },
        overtake: {
          aggressive: "¡Sí! ¡Quítate del camino! ¡Eso es competir de verdad!",
          analytical: "Adelantamiento completado con éxito. Volviendo a estabilizar temperaturas.",
          standard: "¡Buen adelantamiento! Coche superado, vamos a por el siguiente.",
          low_perf: "¡Madre mía, he adelantado a alguien! ¡Ha salido bien!"
        }
      },
      en: {
        tyre_wear: {
          aggressive: "My rear tyres are disintegrating! Box me now or I'll end up in the wall!",
          analytical: "Left tyre degradation is over the limit. Recommend preparing a pit stop soon.",
          standard: "I've lost almost all grip. Tyres are done, I need to pit.",
          low_perf: "The car is undriveable! I'm sliding everywhere! I want new tyres now!"
        },
        rain: {
          aggressive: "It's raining! Let's fit intermediates and pass everyone!",
          analytical: "Drops on the visor. Track wetness rising. Let's monitor the crossover point.",
          standard: "It's starting to rain quite a bit. We must prepare wet tyres if this continues.",
          low_perf: "Oh my god, it's raining! The car is sliding so much! I don't want to crash!"
        },
        dry: {
          aggressive: "The track has dried up! Put the fastest slicks you have on!",
          analytical: "Dry line appearing. Rain tyres are overheating. Box this lap.",
          standard: "The track is drying very quickly. It's time to switch back to dry tyres.",
          low_perf: "I think it's dry now, but the car is still scaring me in the corners."
        },
        focus_push: {
          aggressive: "I'm pushing flat out! Let me race!",
          analytical: "Understood, increasing engine revs and forcing qualifying pace.",
          standard: "Increasing the pace. I will push as much as possible.",
          low_perf: "I will try to go faster, but I don't promise not to spin!"
        },
        box: {
          aggressive: "Box, box! Coming in hot. Make it a fast stop!",
          analytical: "Understood. Pitting this lap. Confirm front wing angle settings.",
          standard: "Copy that. Pitting this lap for tyre change.",
          low_perf: "Understood, heading in. Please have the correct tyres ready."
        },
        pit_stop: {
          aggressive: "Box, box! Coming in hot. Make it a fast stop!",
          analytical: "Understood. Pitting this lap. Confirm front wing angle settings.",
          standard: "Copy that. Pitting this lap for tyre change.",
          low_perf: "Understood, heading in. Please have the correct tyres ready."
        },
        dnf: {
          aggressive: "Nooooo! What a disaster! The engine blew up! What absolute crap reliability!",
          analytical: "Loss of hydraulic pressure. Blew up confirmed. I am sorry for the team.",
          standard: "I have to stop the car. Total loss of power. Race over.",
          low_perf: "Oh no! Something went crack and there's a lot of smoke. I think we are out."
        },
        overtake: {
          aggressive: "Yes! Get out of the way! That's real racing!",
          analytical: "Overtake successfully completed. Settling temperatures back down.",
          standard: "Good pass! Car overtaken, let's hunt down the next one.",
          low_perf: "Oh my, I just overtook someone! It worked!"
        }
      }
    };

    if (participant.driver.baseId === "Pastor Maldonado" && eventType === 'dnf') {
      return lang === 'es'
        ? `📻 [Radio - P. Maldonado]: "He visto un espacio y fui a por él... Lo siento chicos, contacto con la barrera."`
        : `📻 [Radio - P. Maldonado]: "I saw a gap and went for it... Sorry guys, contact with the barrier."`;
    }

    const personalMsgs = messages[lang][eventType];
    if (personalMsgs) {
      const msg = personalMsgs[personality] || personalMsgs['standard'];
      return `📻 [Radio - ${participant.driver.name}]: "${msg}"`;
    }
    return null;
  }

  // --------------------------------------------------------------------------
  // QUALIFYING SIMULATOR
  // --------------------------------------------------------------------------
  initQualifying() {
    this.circuit = this.championship.getCurrentCircuit();
    this.qualiTimer = 600; // 10 minutes
    this.qualiActive = true;
    this.qualiStandings = [];

    // Build participants for Quali
    this.championship.teams.forEach(team => {
      team.drivers.forEach(driver => {
        this.qualiStandings.push({
          driver: driver,
          team: team,
          bestLap: Infinity, // Lower is better
          currentLapTime: 0,
          sectorTimes: [0, 0, 0],
          state: 'in_pits',
          timerInState: Math.random() * 90 // Random initial delay before leaving pits
        });
      });
    });
  }

  calculateQualiLapTime(driver, team) {
    const track = this.circuit;
    const base = track.baseTime;

    // Car factors (higher is faster, 10 is max)
    const engineSpeedFactor = team.engine.speed / 10.0;
    const engineTimeReduction = engineSpeedFactor * track.engineDemand * 2.5;

    const aeroPerformance = (team.chassis.aero * 0.6 + team.chassis.downforce * 0.4) / 10.0;
    const aeroTimeReduction = aeroPerformance * track.aeroDemand * 2.5;

    const weightFactor = team.chassis.weight / 10.0; // 10 is light/good
    const weightTimeReduction = weightFactor * 0.8;

    // Driver factors
    const driverQualiFactor = driver.quali / 10.0;
    const driverTimeReduction = driverQualiFactor * 1.5;

    // Tyres: assume Soft compound equivalent for Quali
    const tyreBonus = 0.8;

    // Team Principal bonus
    const principalBonus = (team.principal.strategyBonus) / 10.0 * 0.2;

    // Random variance based on consistency
    const consistencyFactor = (10 - driver.consistency) / 10.0;
    const randomShift = (Math.random() - 0.5) * consistencyFactor * 0.6;

    const lapTime = base - engineTimeReduction - aeroTimeReduction - weightTimeReduction - driverTimeReduction - tyreBonus - principalBonus + randomShift;
    return parseFloat(lapTime.toFixed(3));
  }

  simulateQualiStep(onUpdate, onFinished, onNewFastestLap) {
    if (!this.qualiActive) return;

    // Virtual seconds passed in this step
    const dt = 1.2 * this.speedMultiplier;
    this.qualiTimer -= dt;

    if (this.qualiTimer <= 0) {
      this.qualiTimer = 0;
      this.qualiActive = false;
      clearInterval(this.qualiIntervalId);

      // Award pole statistics
      this.qualiStandings.sort((a, b) => a.bestLap - b.bestLap);
      this.championship.awardPole(this.qualiStandings[0].driver.baseId);

      onFinished();
      return;
    }

    let fastestLapChanged = false;
    let oldLeaderId = this.qualiStandings.length > 0 ? this.qualiStandings.sort((a, b) => a.bestLap - b.bestLap)[0].driver.baseId : null;

    // Update each driver
    this.qualiStandings.forEach(car => {
      car.timerInState += dt;

      if (car.state === 'in_pits') {
        if (car.timerInState > 80 + Math.random() * 120) {
          car.state = 'out_lap';
          car.timerInState = 0;
          onUpdate({
            type: 'log',
            text: `${car.driver.name} sale de boxes en neumáticos Blandos.`,
            color: 'light'
          });
        }
      }
      else if (car.state === 'out_lap') {
        if (car.timerInState > this.circuit.baseTime * 0.9) {
          car.state = 'flying_lap';
          car.timerInState = 0;
          car.sectorTimes = [0, 0, 0];
        }
      }
      else if (car.state === 'flying_lap') {
        const lapProgress = car.timerInState / this.circuit.baseTime;

        // Simulating sector triggers
        if (car.sectorTimes[0] === 0 && lapProgress >= 0.33) {
          car.sectorTimes[0] = parseFloat((this.circuit.baseTime * 0.33 + (Math.random() - 0.5) * 2).toFixed(3));
        }
        else if (car.sectorTimes[1] === 0 && lapProgress >= 0.66) {
          car.sectorTimes[1] = parseFloat((this.circuit.baseTime * 0.33 + (Math.random() - 0.5) * 2).toFixed(3));
        }

        if (car.timerInState >= this.calculateQualiLapTime(car.driver, car.team)) {
          const finalLapTime = this.calculateQualiLapTime(car.driver, car.team);
          car.sectorTimes[2] = parseFloat((finalLapTime - car.sectorTimes[0] - car.sectorTimes[1]).toFixed(3));

          const improved = finalLapTime < car.bestLap;
          const oldBest = car.bestLap;

          if (improved) {
            car.bestLap = finalLapTime;
          }

          // Go back to pits
          car.state = 'in_pits';
          car.timerInState = 0;

          // Log lap info
          let logText = `${car.driver.name} completó vuelta en ${this.formatLapTime(finalLapTime)}.`;
          if (improved) {
            logText += oldBest === Infinity ? " (Primer Registro)" : " (¡MEJORA RITMO!)";
          }

          onUpdate({
            type: 'log',
            text: logText,
            color: improved ? 'green' : 'light'
          });
        }
      }
    });

    // Resort standings
    this.qualiStandings.sort((a, b) => a.bestLap - b.bestLap);

    // Check if leader changed and leader is valid
    const newLeader = this.qualiStandings[0];
    if (newLeader && newLeader.bestLap !== Infinity && newLeader.driver.baseId !== oldLeaderId) {
      onNewFastestLap(newLeader);
    }

    onUpdate({
      type: 'timer',
      timeStr: this.formatQualiTimer(this.qualiTimer),
      standings: this.qualiStandings
    });
  }

  // --------------------------------------------------------------------------
  // RACE SIMULATOR
  // --------------------------------------------------------------------------
  initRace(qualiResults, playerStrategy) {
    this.circuit = this.championship.getCurrentCircuit();
    this.raceLaps = this.circuit.name === "Monza" ? 16 : (this.circuit.name === "Mónaco" ? 22 : 18);
    this.currentLap = 0;
    this.raceActive = true;
    this.participants = [];
    this.raceCommentary = [];
    this.fullRaceCommentary = [];
    this.pointsAwardedThisGP = false;

    // Weather reset
    this.weather = 'soleado';
    this.trackWetness = 0.0;
    this.weatherSequence = this.generateWeatherSequence();

    // Build race grid from Quali results
    qualiResults.forEach((qCar, index) => {
      // Small starting grid time offsets (0.22s delta per spot to avoid initial overlap)
      const startOffset = index * 0.25;

      let startTyre = 'Medium';
      let plannedPitLap = 8;
      let nextTyre = 'Hard';

      if (qCar.team.isPlayer && playerStrategy) {
        const playerDrivers = qualiResults.filter(q => q.team.isPlayer);
        if (playerDrivers[0] && playerDrivers[0].driver.id === qCar.driver.id) {
          startTyre = playerStrategy.d1.startTyre;
          plannedPitLap = playerStrategy.d1.pitLap;
          nextTyre = playerStrategy.d1.nextTyre;
        } else if (playerDrivers[1] && playerDrivers[1].driver.id === qCar.driver.id) {
          startTyre = playerStrategy.d2.startTyre;
          plannedPitLap = playerStrategy.d2.pitLap;
          nextTyre = playerStrategy.d2.nextTyre;
        }
      } else {
        // AI Strategy planning
        const r = Math.random();
        if (r < 0.3) {
          startTyre = 'Soft';
          plannedPitLap = Math.floor(Math.random() * 3) + 4; // Laps 4-6
          nextTyre = Math.random() < 0.5 ? 'Medium' : 'Hard';
        } else if (r < 0.8) {
          startTyre = 'Medium';
          plannedPitLap = Math.floor(Math.random() * 3) + 7; // Laps 7-9
          nextTyre = Math.random() < 0.4 ? 'Soft' : 'Hard';
        } else {
          startTyre = 'Hard';
          plannedPitLap = Math.floor(Math.random() * 3) + 10; // Laps 10-12
          nextTyre = Math.random() < 0.6 ? 'Medium' : 'Soft';
        }
        plannedPitLap = Math.max(2, Math.min(plannedPitLap, this.raceLaps - 2));
      }

      this.participants.push({
        driver: qCar.driver,
        team: qCar.team,
        isUserDriver: qCar.team.isPlayer,
        tyreHealth: 100.0,
        tyreCompound: startTyre,
        pitStops: 0,
        status: 'active', // 'active', 'dnf', 'dsq'
        accumulatedTime: startOffset, // Current race time
        lastLapTime: 0,
        pitStopScheduledThisLap: false,
        plannedPitLap: plannedPitLap,
        nextTyreSelected: nextTyre,
        tyresUsed: new Set([startTyre]),
        pushMode: 'balanced', // 'conserve', 'balanced', 'push'
        positionHistory: [index + 1],
        tyreLife: 0 // Laps on current tyre set
      });
    });

    this.logCommentary(`🏁 ¡BIENVENIDOS AL GP DE ${this.circuit.name.toUpperCase()}!`, true);
    this.logCommentary(`La parrilla de salida está formada tras la clasificación.`, true);
    this.logCommentary(`¡Semáforos apagados y arrancamos!`, true);
  }

  logCommentary(text, isHighPriority = false) {
    this.fullRaceCommentary.unshift(text);
    if (isHighPriority) {
      this.raceCommentary.unshift(text);
    }
  }

  calculateRaceLapTime(participant) {
    const track = this.circuit;
    const base = track.baseTime;

    // Car Engine & Aero
    const engineSpeedFactor = participant.team.engine.speed / 10.0;
    const engineTimeReduction = engineSpeedFactor * track.engineDemand * 2.2;

    const aeroPerformance = (participant.team.chassis.aero * 0.6 + participant.team.chassis.downforce * 0.4) / 10.0;
    const aeroTimeReduction = aeroPerformance * track.aeroDemand * 2.2;

    const weightFactor = participant.team.chassis.weight / 10.0;
    const weightTimeReduction = weightFactor * 0.7;

    // Driver Pace
    const driverRaceFactor = participant.driver.racePace / 10.0;
    const driverTimeReduction = driverRaceFactor * 1.4;

    // Tyre compound delta
    let compoundOffset = 0;
    if (participant.tyreCompound === 'Soft') compoundOffset = -0.55; // Fast initially
    if (participant.tyreCompound === 'Hard') compoundOffset = 0.65;   // Slower initially
    if (participant.tyreCompound === 'Intermediate') compoundOffset = 1.3; // Slower on dry
    if (participant.tyreCompound === 'Wet') compoundOffset = 2.6;          // Much slower on dry

    // Wetness penalty depending on tyres
    let wetnessPenalty = 0;
    const w = this.trackWetness;
    const comp = participant.tyreCompound;

    if (comp === 'Soft' || comp === 'Medium' || comp === 'Hard') {
      if (w > 0.0) {
        wetnessPenalty = w * 10.5; // Dry tyres suffer heavily on wet track
      }
    } else if (comp === 'Intermediate') {
      if (w < 0.15) {
        wetnessPenalty = (0.15 - w) * 2.5; // too dry
      } else if (w > 0.6) {
        wetnessPenalty = (w - 0.6) * 5.0; // too wet
      } else {
        wetnessPenalty = -0.8; // optimal damp
      }
    } else if (comp === 'Wet') {
      if (w < 0.5) {
        wetnessPenalty = (0.5 - w) * 4.8; // too dry
      } else {
        wetnessPenalty = -1.6; // optimal wet
      }
    }

    // Tyre degradation penalty (exponential curve)
    const usage = (100.0 - participant.tyreHealth) / 100.0;
    const degPenalty = Math.pow(usage, 2.5) * 6.5; // Up to 6.5s loss at 0% tyre health

    // Strategy / Push Mode delta
    let pushOffset = 0;
    if (participant.pushMode === 'conserve') pushOffset = 0.45;  // Slow pace
    if (participant.pushMode === 'push') pushOffset = -0.55;     // Extra speed

    // Team Principal strategic bonus
    const principalBonus = (participant.team.principal.strategyBonus) / 10.0 * 0.15;

    // Consistency noise
    const consistencyFactor = (10 - participant.driver.consistency) / 10.0;
    const randomShift = (Math.random() - 0.5) * consistencyFactor * 0.7;

    const lapTime = base - engineTimeReduction - aeroTimeReduction - weightTimeReduction - driverTimeReduction + compoundOffset + wetnessPenalty + degPenalty + pushOffset - principalBonus + randomShift;
    return parseFloat(lapTime.toFixed(3));
  }

  simulateRaceLap(onUpdate, onFinished) {
    if (!this.raceActive) return;

    this.currentLap += 1;
    const lapNumber = this.currentLap;

    // A. Update Weather & Track Wetness
    const oldWeather = this.weather;
    this.weather = this.weatherSequence[this.currentLap - 1] || 'soleado';
    const oldWetness = this.trackWetness;

    if (this.weather === 'lluvia_fuerte') {
      this.trackWetness = Math.min(1.0, this.trackWetness + 0.22);
    } else if (this.weather === 'lluvia_ligera') {
      this.trackWetness = Math.min(0.8, this.trackWetness + 0.12);
    } else if (this.weather === 'nublado') {
      this.trackWetness = Math.max(0.0, this.trackWetness - 0.03);
    } else if (this.weather === 'soleado') {
      this.trackWetness = Math.max(0.0, this.trackWetness - 0.08);
    }
    this.trackWetness = parseFloat(this.trackWetness.toFixed(2));

    // Log weather changes
    if (this.weather !== oldWeather) {
      const weatherNames = {
        soleado: "SOLEADO ☀️",
        nublado: "NUBLADO ☁️",
        lluvia_ligera: "LLUVIA LIGERA 🌧️",
        lluvia_fuerte: "LLUVIA FUERTE ⛈️"
      };
      this.logCommentary(`🌤️ ¡CLIMA! Cambia a ${weatherNames[this.weather]}.`, true);

      // Drivers comment on weather change
      const userDrivers = this.participants.filter(p => p.isUserDriver && p.status === 'active');
      if (userDrivers.length > 0) {
        const talkingDriver = userDrivers[Math.floor(Math.random() * userDrivers.length)];
        const eventType = (this.weather === 'lluvia_ligera' || this.weather === 'lluvia_fuerte') ? 'rain' : 'dry';
        const radioMsg = this.triggerRadioMessage(talkingDriver, eventType);
        if (radioMsg) {
          this.logCommentary(radioMsg, true);
        }
      }
    }

    const completedThisLap = [];

    // 1. Simulate laptimes, tyre wear, pitfalls & engine failures
    this.participants.forEach(p => {
      if (p.status === 'dnf') return;

      // Increment tyre age
      p.tyreLife += 1;

      // A. Engine reliability or pilot error check (DNF)
      let dnfChance = 0.001 * (11 - p.team.engine.reliability);
      if (p.pushMode === 'push') dnfChance *= 2.2;

      let pilotErrorChance = 0.0008 * (11 - p.driver.consistency);
      if (p.pushMode === 'push') pilotErrorChance *= 1.8;

      // Slick on wet crash risk
      if ((p.tyreCompound === 'Soft' || p.tyreCompound === 'Medium' || p.tyreCompound === 'Hard') && this.trackWetness > 0.25) {
        pilotErrorChance += (this.trackWetness - 0.25) * 0.025;
      }

      const roll = Math.random();
      if (roll < dnfChance) {
        p.status = 'dnf';
        p.lastLapTime = Infinity;
        const radioMsg = this.triggerRadioMessage(p, 'dnf');
        if (radioMsg) this.logCommentary(radioMsg, true);
        this.logCommentary(`⚠️ ¡VUELTA ${lapNumber}! Humo blanco en el coche de ${p.driver.name}. Rotura de Motor. (ABANDONA)`, true);
        synth.playDnf();
        return;
      } else if (roll < dnfChance + pilotErrorChance) {
        p.status = 'dnf';
        p.lastLapTime = Infinity;
        const radioMsg = this.triggerRadioMessage(p, 'dnf');
        if (radioMsg) this.logCommentary(radioMsg, true);
        this.logCommentary(`⚠️ ¡VUELTA ${lapNumber}! Trompo y choque contra el muro de ${p.driver.name}. (ABANDONA)`, true);
        synth.playDnf();
        return;
      }

      // B. Tyre Degradation rate computation
      let baseWear = 6.0;
      if (p.tyreCompound === 'Soft') baseWear = 10.5;
      if (p.tyreCompound === 'Hard') baseWear = 3.6;
      if (p.tyreCompound === 'Intermediate') baseWear = 5.5;
      if (p.tyreCompound === 'Wet') baseWear = 7.0;

      // Wetness multipliers for tyre wear
      let wetMultiplier = 1.0;
      const w = this.trackWetness;
      if ((p.tyreCompound === 'Soft' || p.tyreCompound === 'Medium' || p.tyreCompound === 'Hard') && w > 0.2) {
        wetMultiplier = Math.max(0.4, 1.0 - w * 0.6);
      } else if (p.tyreCompound === 'Intermediate' && w < 0.2) {
        wetMultiplier = 3.2; // Intermediate wears rapidly on dry track
      } else if (p.tyreCompound === 'Wet' && w < 0.2) {
        wetMultiplier = 5.0; // Wet tyre burns up on dry track
      } else if (p.tyreCompound === 'Wet' && w < 0.5) {
        wetMultiplier = 2.5;
      }

      // Track abrasion factor
      const wearTrack = this.circuit.abrasion;
      const wearDriver = 1.0 - ((p.driver.tyreMgmt - 1) * 0.045);
      const wearTyresComponent = 1.0 - ((p.team.tyres.wearRate - 1) * 0.035);

      let wearPush = 1.0;
      if (p.pushMode === 'conserve') wearPush = 0.55;
      if (p.pushMode === 'push') wearPush = 1.6;

      const lapWear = baseWear * wearTrack * wearDriver * wearTyresComponent * wearPush * wetMultiplier;
      p.tyreHealth = Math.max(0.0, parseFloat((p.tyreHealth - lapWear).toFixed(1)));

      // Tyre warning messages
      if (p.tyreHealth < 35.0 && p.tyreLife % 3 === 0 && p.status === 'active') {
        const radioMsg = this.triggerRadioMessage(p, 'tyre_wear');
        if (radioMsg && (p.isUserDriver || Math.random() < 0.15)) {
          this.logCommentary(radioMsg, p.isUserDriver);
        }
      }

      // C. Pit Stop decisions
      let willPit = false;
      let nextCompound = p.nextTyreSelected;

      if (p.isUserDriver) {
        if (p.pitStopScheduledThisLap) {
          willPit = true;
          p.pitStopScheduledThisLap = false;
        } else if (p.plannedPitLap === this.currentLap && p.pitStops === 0) {
          willPit = true;
        }
      } else {
        // AI Strategy with planned stop OR weather changes OR low tyre health
        const lapsLeft = this.raceLaps - lapNumber;
        const needsWetTyres = this.trackWetness >= 0.5 && p.tyreCompound !== 'Wet';
        const needsInterTyres = this.trackWetness >= 0.2 && this.trackWetness < 0.5 && p.tyreCompound !== 'Intermediate';
        const needsDryTyres = this.trackWetness < 0.15 && (p.tyreCompound === 'Intermediate' || p.tyreCompound === 'Wet');

        if (p.tyreHealth < 25.0 || needsWetTyres || needsInterTyres || needsDryTyres || (p.plannedPitLap === this.currentLap && p.pitStops === 0)) {
          willPit = true;
          if (this.trackWetness >= 0.5) {
            nextCompound = 'Wet';
          } else if (this.trackWetness >= 0.2) {
            nextCompound = 'Intermediate';
          } else if (p.tyreCompound === 'Intermediate' || p.tyreCompound === 'Wet') {
            if (lapsLeft < 6) nextCompound = 'Soft';
            else if (lapsLeft < 12) nextCompound = 'Medium';
            else nextCompound = 'Hard';
          } else {
            nextCompound = p.nextTyreSelected;
          }
        }
      }

      let lapTime = this.calculateRaceLapTime(p);
      let pitStopDuration = 0;

      if (willPit) {
        p.pitStops += 1;
        const basePitlaneTime = 21.0;
        const crewWorkTime = 3.8 - (p.team.principal.pitBonus * 0.16) + (Math.random() - 0.5) * 0.3;

        pitStopDuration = basePitlaneTime + crewWorkTime;

        p.tyreCompound = nextCompound;
        p.tyreHealth = 100.0;
        p.tyreLife = 0;
        p.tyresUsed.add(nextCompound);

        lapTime += pitStopDuration;

        const radioMsg = this.triggerRadioMessage(p, 'pit_stop');
        if (radioMsg && p.isUserDriver) this.logCommentary(radioMsg, true);

        // Pit stop is high priority only if it's user driver or they are in the Top 5
        const currentPos = this.participants.indexOf(p) + 1;
        const isHighPriorityPit = p.isUserDriver || currentPos <= 5;
        this.logCommentary(`🔧 ¡PARADA! ${p.driver.name} entra en boxes y monta neumáticos ${this.translateCompound(nextCompound)}. Parada: ${crewWorkTime.toFixed(1)}s.`, isHighPriorityPit);
        synth.playPitStop();
      }

      p.lastLapTime = lapTime;
      p.accumulatedTime += lapTime;
      completedThisLap.push(p);
    });

    // 2. Sorting grid by total accumulated time (only active cars)
    const activeParticipants = this.participants.filter(p => p.status === 'active');
    const retiredParticipants = this.participants.filter(p => p.status === 'dnf');

    activeParticipants.sort((a, b) => a.accumulatedTime - b.accumulatedTime);

    const oldOrderIds = this.participants.filter(p => p.status === 'active').sort((a, b) => {
      return this.participants.indexOf(a) - this.participants.indexOf(b);
    }).map(p => p.driver.baseId);

    this.participants = [...activeParticipants, ...retiredParticipants];

    // 3. Detect Overtakes (Active drivers passing each other, excluding pits)
    const newOrderActive = this.participants.filter(p => p.status === 'active');

    for (let i = 0; i < newOrderActive.length; i++) {
      const currentCar = newOrderActive[i];
      const driverId = currentCar.driver.baseId;
      const oldIndex = oldOrderIds.indexOf(driverId);
      const newIndex = i;

      if (oldIndex > newIndex && currentCar.lastLapTime < 110) {
        const spotsGained = oldIndex - newIndex;
        const carAheadInOld = newOrderActive[newIndex + 1];

        if (carAheadInOld && carAheadInOld.lastLapTime < 110) {
          const isHighPriorityOvertake = currentCar.isUserDriver || carAheadInOld.isUserDriver || (newIndex === 0);
          this.logCommentary(`⚔️ ¡Vuelta ${lapNumber}! ${currentCar.driver.name} adelanta a ${carAheadInOld.driver.name} y se coloca P${newIndex + 1}.`, isHighPriorityOvertake);
          if (currentCar.isUserDriver || carAheadInOld.isUserDriver) {
            synth.playOvertake();
            if (currentCar.isUserDriver) {
              const radioMsg = this.triggerRadioMessage(currentCar, 'overtake');
              if (radioMsg) this.logCommentary(radioMsg, true);
            }
          }
        }
      }
    }

    // 4. Update gaps to leader and positional badges
    const leader = this.participants.find(p => p.status === 'active');
    this.participants.forEach((p, idx) => {
      p.positionHistory.push(idx + 1);

      if (p.status === 'dnf') {
        p.gapStr = 'RETIRADO';
      } else if (idx === 0) {
        p.gapStr = 'LÍDER';
      } else {
        const gap = p.accumulatedTime - leader.accumulatedTime;
        p.gapStr = `+${gap.toFixed(1)}s`;
      }
    });

    // Check if race completed
    if (this.currentLap >= this.raceLaps) {
      this.raceActive = false;
      if (this.raceIntervalId) clearInterval(this.raceIntervalId);

      // Rule Enforcing:
      // In dry races (no wet/intermediate tyres used by anyone), every driver MUST pit at least once
      // and use at least two different dry compounds.
      let wetConditionsOccurred = false;
      this.participants.forEach(p => {
        if (p.tyresUsed.has('Intermediate') || p.tyresUsed.has('Wet')) {
          wetConditionsOccurred = true;
        }
      });

      this.participants.forEach(p => {
        if (p.status === 'active') {
          if (!wetConditionsOccurred) {
            const dryCompoundsUsed = Array.from(p.tyresUsed).filter(c => c === 'Soft' || c === 'Medium' || c === 'Hard');
            if (p.pitStops < 1 || dryCompoundsUsed.length < 2) {
              p.status = 'dsq';
              p.accumulatedTime = Infinity;
              this.logCommentary(`❌ ¡DESCALIFICACIÓN FIA! ${p.driver.name} es descalificado por infringir la regla obligatoria de neumáticos.`, true);
            }
          }
        }
      });

      // Sort after DSQ
      const activeAfterDsq = this.participants.filter(p => p.status === 'active');
      const dsqAfterDsq = this.participants.filter(p => p.status === 'dsq');
      const retiredAfterDsq = this.participants.filter(p => p.status === 'dnf');
      activeAfterDsq.sort((a, b) => a.accumulatedTime - b.accumulatedTime);
      this.participants = [...activeAfterDsq, ...dsqAfterDsq, ...retiredAfterDsq];

      // Re-calculate gaps
      const leader = this.participants.find(p => p.status === 'active');
      this.participants.forEach((p, idx) => {
        if (p.status === 'dnf') {
          p.gapStr = 'RETIRADO';
        } else if (p.status === 'dsq') {
          p.gapStr = 'DESCALIFICADO';
        } else if (idx === 0) {
          p.gapStr = 'LÍDER';
        } else {
          const gap = p.accumulatedTime - (leader ? leader.accumulatedTime : 0);
          p.gapStr = `+${gap.toFixed(1)}s`;
        }
      });

      this.logCommentary(`🏁 ¡BANDERA A CUADROS! Finaliza el GP de ${this.circuit.name}.`, true);
      synth.playCheckered();
      onFinished();
    } else {
      onUpdate();
    }
  }

  // Helpers
  formatLapTime(time) {
    if (time === Infinity || isNaN(time)) return "--:--";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    const ms = Math.floor((time % 1) * 1000);
    return `${mins}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
  }

  formatQualiTimer(time) {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  translateCompound(comp) {
    if (comp === 'Soft') return 'Blando';
    if (comp === 'Medium') return 'Medio';
    if (comp === 'Hard') return 'Duro';
    if (comp === 'Intermediate') return 'Intermedios';
    if (comp === 'Wet') return 'Lluvia';
    return comp;
  }
}

// ============================================================================
// 5. APPLICATION UI CONTROLLER (APP)
// ============================================================================

class App {
  constructor() {
    this.currentScreen = 'menu';
    this.championship = null;
    this.simulator = null;
    this.lang = 'es'; // 'es' | 'en'

    // Season tracking for stats
    this.seasonStats = { d1: { qualiPositions: [], racePositions: [], dnfs: 0, dsqs: 0 }, d2: { qualiPositions: [], racePositions: [], dnfs: 0, dsqs: 0 } };
    this.storySkipRequested = false;

    // User Draft state
    this.userTeam = {
      Chassis: null,
      Engine: null,
      Tyres: null,
      Driver1: null,
      Driver2: null,
      Principal: null
    };
    this.draftCategoriesOrder = [];
    this.currentDraftIndex = 0;
    this.draftOptions = [];
    this.selectedDriverBaseIds = new Set(); // To avoid duplicates of selected drivers

    this.activeDashboardTab = 'drivers'; // 'drivers' | 'constructors'
    this.activeResultsTab = 'drivers';

    this.initDOMElements();
    this.bindEvents();
    this.applyLanguage();
  }

  initDOMElements() {
    // Screens
    this.screens = {
      menu: document.getElementById('screen-menu'),
      draft: document.getElementById('screen-draft'),
      dashboard: document.getElementById('screen-dashboard'),
      quali: document.getElementById('screen-quali'),
      preRace: document.getElementById('screen-pre-race'),
      race: document.getElementById('screen-race'),
      standings: document.getElementById('screen-standings'),
      story: document.getElementById('screen-story'),
      seasonSummary: document.getElementById('screen-season-summary')
    };

    // Buttons
    this.buttons = {
      start: document.getElementById('btn-start-game'),
      audioToggle: document.getElementById('btn-audio-toggle'),
      langToggle: document.getElementById('btn-lang-toggle'),
      goToQuali: document.getElementById('btn-go-to-quali'),
      skipQuali: document.getElementById('btn-skip-quali'),
      startRace: document.getElementById('btn-start-race'),
      d1Pit: document.getElementById('btn-d1-pit'),
      d2Pit: document.getElementById('btn-d2-pit'),
      showResults: document.getElementById('btn-show-race-results'),
      nextRace: document.getElementById('btn-next-race'),
      restartChampionship: document.getElementById('btn-restart-championship')
    };

    // Audio text update
    this.updateAudioButtonText();
  }

  updateAudioButtonText() {
    if (this.buttons.audioToggle) {
      this.buttons.audioToggle.innerText = this.lang === 'es'
        ? `SONIDO: ${synth.enabled ? 'ON' : 'OFF'}`
        : `AUDIO: ${synth.enabled ? 'ON' : 'OFF'}`;
    }
  }

  applyLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.dataset.i18n;
      const translation = TRANSLATIONS[this.lang][key];
      if (translation) {
        if (el.tagName === 'INPUT' && el.type === 'button') {
          el.value = translation;
        } else {
          el.innerHTML = translation;
        }
      }
    });

    // Update language toggle button text
    if (this.buttons.langToggle) {
      this.buttons.langToggle.innerText = this.lang === 'es' ? 'ESP' : 'ENG';
    }

    // Update audio button label based on language
    this.updateAudioButtonText();
  }

  bindEvents() {
    // Menu Events
    this.buttons.start.addEventListener('click', () => {
      synth.playSelect();
      this.startNewSeason();
    });

    if (this.buttons.langToggle) {
      this.buttons.langToggle.addEventListener('click', () => {
        this.lang = this.lang === 'es' ? 'en' : 'es';
        synth.playClick();
        this.applyLanguage();

        // Re-render draft or dashboard if active to apply lang changes
        if (this.currentScreen === 'draft') {
          const currentCat = this.draftCategoriesOrder[this.currentDraftIndex];
          if (currentCat) {
            document.getElementById('draft-category-title').innerText = this.getCategoryName(currentCat);
            this.renderDraftOptions(currentCat);
            // Re-translate filled slots
            Object.keys(this.userTeam).forEach(cat => {
              const slot = document.getElementById(`slot-${cat}`);
              if (!slot.classList.contains('filled')) {
                slot.querySelector('.slot-value').innerText = this.lang === 'es' ? "Vacío" : "Empty";
              }
            });
          }
        } else if (this.currentScreen === 'dashboard') {
          this.renderDashboard();
        } else if (this.currentScreen === 'preRace') {
          this.renderPreRaceStrategy();
        }
      });
    }

    this.buttons.audioToggle.addEventListener('click', () => {
      synth.toggle();
      this.updateAudioButtonText();
      synth.playClick();
    });

    // Strategy & Dashboard Tabs
    document.getElementById('tab-drivers').addEventListener('click', () => {
      synth.playClick();
      this.switchDashboardTab('drivers');
    });
    document.getElementById('tab-constructors').addEventListener('click', () => {
      synth.playClick();
      this.switchDashboardTab('constructors');
    });

    document.getElementById('tab-results-drivers').addEventListener('click', () => {
      synth.playClick();
      this.switchResultsTab('drivers');
    });
    document.getElementById('tab-results-constructors').addEventListener('click', () => {
      synth.playClick();
      this.switchResultsTab('constructors');
    });

    // Go to Quali
    this.buttons.goToQuali.addEventListener('click', () => {
      synth.playSelect();
      this.startQualiSession();
    });

    // Skip Quali
    this.buttons.skipQuali.addEventListener('click', () => {
      synth.playClick();
      this.skipQualiSimulation();
    });

    // Start Race (now redirects to Pre-Race Strategy planning)
    this.buttons.startRace.addEventListener('click', () => {
      synth.playSelect();
      this.switchScreen('preRace');
    });

    // Confirm pre-race strategy and start race
    const btnConfirmStrat = document.getElementById('btn-confirm-strategy');
    if (btnConfirmStrat) {
      btnConfirmStrat.addEventListener('click', () => {
        synth.playSelect();

        const d1StartTyre = document.getElementById('pre-d1-start-tyre').value;
        const d1PitLap = parseInt(document.getElementById('pre-d1-pit-lap').value) || 7;
        const d1NextTyre = document.getElementById('pre-d1-next-tyre').value;

        const d2StartTyre = document.getElementById('pre-d2-start-tyre').value;
        const d2PitLap = parseInt(document.getElementById('pre-d2-pit-lap').value) || 8;
        const d2NextTyre = document.getElementById('pre-d2-next-tyre').value;

        const strategy = {
          d1: { startTyre: d1StartTyre, pitLap: d1PitLap, nextTyre: d1NextTyre },
          d2: { startTyre: d2StartTyre, pitLap: d2PitLap, nextTyre: d2NextTyre }
        };

        this.startRaceSession(strategy);
      });
    }

    // Skip race animation (Simulate Instantly)
    const btnSkipRace = document.getElementById('btn-skip-race');
    if (btnSkipRace) {
      btnSkipRace.addEventListener('click', () => {
        synth.playSelect();
        this.skipRaceSimulation();
      });
    }

    // Race Strategy modifiers (Driver 1 & 2 Push modes)
    document.querySelectorAll('#ctrl-driver1 .pace-selector button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        synth.playClick();
        document.querySelectorAll('#ctrl-driver1 .pace-selector button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.updateDriverPushMode(0, e.target.dataset.pace);
      });
    });

    document.querySelectorAll('#ctrl-driver2 .pace-selector button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        synth.playClick();
        document.querySelectorAll('#ctrl-driver2 .pace-selector button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.updateDriverPushMode(1, e.target.dataset.pace);
      });
    });

    // Pit actions
    this.buttons.d1Pit.addEventListener('click', () => {
      synth.playClick();
      this.scheduleDriverPit(0);
    });

    this.buttons.d2Pit.addEventListener('click', () => {
      synth.playClick();
      this.scheduleDriverPit(1);
    });

    // Speed Controls
    document.querySelectorAll('#speed-controls button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        synth.playClick();
        document.querySelectorAll('#speed-controls button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.updateGameSpeed(parseInt(e.target.dataset.speed));
      });
    });

    // Show Results
    this.buttons.showResults.addEventListener('click', () => {
      synth.playSelect();
      this.showPostRaceStandings();
    });

    // Advance Race / Restart
    this.buttons.nextRace.addEventListener('click', () => {
      synth.playSelect();
      this.advanceToNextGP();
    });

    this.buttons.restartChampionship.addEventListener('click', () => {
      synth.playSelect();
      this.switchScreen('menu');
    });

    // Slider live display updates
    const d1Slider = document.getElementById('pre-d1-pit-lap');
    const d2Slider = document.getElementById('pre-d2-pit-lap');
    if (d1Slider) d1Slider.addEventListener('input', (e) => {
      document.getElementById('pre-d1-pit-lap-display').innerText = e.target.value;
    });
    if (d2Slider) d2Slider.addEventListener('input', (e) => {
      document.getElementById('pre-d2-pit-lap-display').innerText = e.target.value;
    });

    // Simulate full championship from dashboard
    const btnSimChamp = document.getElementById('btn-sim-championship');
    if (btnSimChamp) btnSimChamp.addEventListener('click', () => {
      synth.playSelect();
      this.simulateFullChampionshipStoryMode();
    });

    // Simulate single GP from pre-race
    const btnSimGP = document.getElementById('btn-sim-gp');
    if (btnSimGP) btnSimGP.addEventListener('click', () => {
      synth.playSelect();
      this.simulateSingleGPStoryMode();
    });

    // Simulate rest of championship from standings
    const btnSimRest = document.getElementById('btn-sim-rest-championship');
    if (btnSimRest) btnSimRest.addEventListener('click', () => {
      synth.playSelect();
      this.championship.currentRaceIndex += 1;
      this.simulateFullChampionshipStoryMode();
    });

    // View season summary
    const btnViewSummary = document.getElementById('btn-view-season-summary');
    if (btnViewSummary) btnViewSummary.addEventListener('click', () => {
      synth.playSelect();
      this.renderSeasonSummary();
      this.switchScreen('seasonSummary');
    });

    // Share on X
    const btnShareX = document.getElementById('btn-share-x');
    if (btnShareX) btnShareX.addEventListener('click', () => {
      this.shareOnTwitter();
    });

    // Restart from summary
    const btnRestartSummary = document.getElementById('btn-restart-from-summary');
    if (btnRestartSummary) btnRestartSummary.addEventListener('click', () => {
      synth.playSelect();
      this.switchScreen('menu');
    });

    // Story skip
    const btnStorySkip = document.getElementById('btn-story-skip');
    if (btnStorySkip) btnStorySkip.addEventListener('click', () => {
      this.storySkipRequested = true;
    });
  }

  switchScreen(screenName) {
    this.currentScreen = screenName;
    Object.keys(this.screens).forEach(key => {
      if (key === screenName) {
        this.screens[key].classList.add('active');
      } else {
        this.screens[key].classList.remove('active');
      }
    });

    // Screen entering setups
    if (screenName === 'dashboard') {
      this.renderDashboard();
    } else if (screenName === 'preRace') {
      this.renderPreRaceStrategy();
    }
  }

  switchDashboardTab(tab) {
    this.activeDashboardTab = tab;
    if (tab === 'drivers') {
      document.getElementById('tab-drivers').classList.add('active');
      document.getElementById('tab-constructors').classList.remove('active');
      document.getElementById('standings-drivers-view').classList.remove('hidden');
      document.getElementById('standings-constructors-view').classList.add('hidden');
    } else {
      document.getElementById('tab-drivers').classList.remove('active');
      document.getElementById('tab-constructors').classList.add('active');
      document.getElementById('standings-drivers-view').classList.add('hidden');
      document.getElementById('standings-constructors-view').classList.remove('hidden');
    }
  }

  switchResultsTab(tab) {
    this.activeResultsTab = tab;
    if (tab === 'drivers') {
      document.getElementById('tab-results-drivers').classList.add('active');
      document.getElementById('tab-results-constructors').classList.remove('active');
      document.getElementById('results-drivers-view').classList.remove('hidden');
      document.getElementById('results-constructors-view').classList.add('hidden');
    } else {
      document.getElementById('tab-results-drivers').classList.remove('active');
      document.getElementById('tab-results-constructors').classList.add('active');
      document.getElementById('results-drivers-view').classList.add('hidden');
      document.getElementById('results-constructors-view').classList.remove('hidden');
    }
  }

  // ============================================================================
  // DRAFT CORE FLOW
  // ============================================================================

  startNewSeason() {
    // Reset Team
    this.userTeam = {
      Chassis: null,
      Engine: null,
      Tyres: null,
      Driver1: null,
      Driver2: null,
      Principal: null
    };
    this.selectedDriverBaseIds.clear();

    // Setup 6-round category pool in random order
    this.draftCategoriesOrder = ['Chassis', 'Engine', 'Tyres', 'Driver1', 'Driver2', 'Principal']
      .sort(() => Math.random() - 0.5);

    this.currentDraftIndex = 0;

    // Clear Visual Slot Labels
    Object.keys(this.userTeam).forEach(cat => {
      const slot = document.getElementById(`slot-${cat}`);
      slot.classList.remove('filled', 'active-category');
      slot.querySelector('.slot-value').innerText = this.lang === 'es' ? "Vacío" : "Empty";
    });

    this.switchScreen('draft');
    this.triggerNextDraftRound();
  }

  triggerNextDraftRound() {
    if (this.currentDraftIndex >= 6) {
      // Draft completed! Generate championship
      this.initChampionshipAndRivals();
      return;
    }

    const currentCat = this.draftCategoriesOrder[this.currentDraftIndex];
    document.getElementById('draft-round-num').innerText = this.currentDraftIndex + 1;
    document.getElementById('draft-category-title').innerText = this.getCategoryName(currentCat);
    document.getElementById('draft-progress').style.width = `${((this.currentDraftIndex + 1) / 6) * 100}%`;

    // Highlight slot in UI
    Object.keys(this.userTeam).forEach(cat => {
      const slot = document.getElementById(`slot-${cat}`);
      if (cat === currentCat) {
        slot.classList.add('active-category');
      } else {
        slot.classList.remove('active-category');
      }
    });

    // Pick 3 random options from database
    this.generateDraftOptions(currentCat);
    this.renderDraftOptions(currentCat);
  }

  generateDraftOptions(category) {
    let pool = [];
    if (category === 'Chassis') pool = DATABASE.chassis;
    else if (category === 'Engine') pool = DATABASE.engines;
    else if (category === 'Tyres') pool = DATABASE.tyres;
    else if (category === 'Driver1' || category === 'Driver2') {
      // Filter out already selected drivers to prevent duplication!
      pool = DATABASE.drivers.filter(d => !this.selectedDriverBaseIds.has(d.baseId));
    }
    else if (category === 'Principal') pool = DATABASE.principals;

    // Shuffle and pick 3
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    this.draftOptions = shuffled.slice(0, 3);
  }

  renderDraftOptions(category) {
    const container = document.getElementById('draft-options');
    container.innerHTML = "";

    this.draftOptions.forEach((option, idx) => {
      const card = document.createElement('div');
      card.className = "card-retro draft-option-card";

      let headerHTML = `
        <div class="option-header">
          <span class="option-era font-bold">${option.era}</span>
          <span class="text-accent font-bold">#${idx + 1}</span>
        </div>
        <div class="option-title">${option.name}</div>
      `;

      let statsHTML = `<div class="option-stats">`;

      if (category === 'Chassis') {
        statsHTML += this.createStatRow("aero", option.aero, "bg-cyan");
        statsHTML += this.createStatRow("downforce", option.downforce, "bg-magenta");
        statsHTML += this.createStatRow("weight", option.weight, "bg-yellow");
      } else if (category === 'Engine') {
        statsHTML += this.createStatRow("speed", option.speed, "bg-cyan");
        statsHTML += this.createStatRow("reliability", option.reliability, "bg-green");
      } else if (category === 'Tyres') {
        statsHTML += this.createStatRow("wearRate", option.wearRate, "bg-green");
        statsHTML += this.createStatRow("tempWindow", option.tempWindow, "bg-yellow");
      } else if (category === 'Driver1' || category === 'Driver2') {
        statsHTML += this.createStatRow("quali", option.quali, "bg-magenta");
        statsHTML += this.createStatRow("racePace", option.racePace, "bg-cyan");
        statsHTML += this.createStatRow("tyreMgmt", option.tyreMgmt, "bg-green");
        statsHTML += this.createStatRow("consistency", option.consistency, "bg-yellow");
      } else if (category === 'Principal') {
        statsHTML += this.createStatRow("pitBonus", option.pitBonus, "bg-green");
        statsHTML += this.createStatRow("strategyBonus", option.strategyBonus, "bg-cyan");
      }

      statsHTML += `</div>`;

      card.innerHTML = headerHTML + statsHTML;

      card.addEventListener('click', () => {
        synth.playSelect();
        this.selectDraftOption(category, option);
      });

      container.appendChild(card);
    });
  }

  createStatRow(labelKey, value, barClass) {
    const labels = {
      es: {
        aero: "Aerodinámica",
        downforce: "Carga Aero",
        weight: "Peso",
        speed: "Velocidad Punta",
        reliability: "Fiabilidad",
        wearRate: "Durabilidad",
        tempWindow: "Ventana Temp.",
        quali: "Calificación",
        racePace: "Ritmo Carrera",
        tyreMgmt: "Gestión Gomas",
        consistency: "Consistencia",
        pitBonus: "Bonus Paradas",
        strategyBonus: "Estrategia"
      },
      en: {
        aero: "Aerodynamics",
        downforce: "Downforce",
        weight: "Weight",
        speed: "Top Speed",
        reliability: "Reliability",
        wearRate: "Durability",
        tempWindow: "Temp. Window",
        quali: "Qualifying Pace",
        racePace: "Race Pace",
        tyreMgmt: "Tyre Management",
        consistency: "Consistency",
        pitBonus: "Pitstop Bonus",
        strategyBonus: "Strategy Bonus"
      }
    };
    const lang = this.lang || 'es';
    const label = labels[lang][labelKey] || labelKey;
    const widthPct = value * 10;
    return `
      <div class="stat-row">
        <span>${label}:</span>
        <div>
          <span>${value}/10</span>
          <div class="stat-bar-container">
            <div class="stat-bar ${barClass}" style="width: ${widthPct}%;"></div>
          </div>
        </div>
      </div>
    `;
  }

  selectDraftOption(category, option) {
    this.userTeam[category] = option;
    if (category === 'Driver1' || category === 'Driver2') {
      this.selectedDriverBaseIds.add(option.baseId);
    }

    // Update UI slot
    const slot = document.getElementById(`slot-${category}`);
    slot.classList.remove('active-category');
    slot.classList.add('filled');
    slot.querySelector('.slot-value').innerText = option.name;

    this.currentDraftIndex += 1;
    setTimeout(() => {
      this.triggerNextDraftRound();
    }, 400);
  }

  getCategoryName(cat) {
    const lang = this.lang || 'es';
    if (lang === 'es') {
      if (cat === 'Chassis') return 'CHASIS';
      if (cat === 'Engine') return 'MOTOR';
      if (cat === 'Tyres') return 'NEUMÁTICOS';
      if (cat === 'Driver1') return 'PRIMER PILOTO';
      if (cat === 'Driver2') return 'SEGUNDO PILOTO';
      if (cat === 'Principal') return 'JEFE DE EQUIPO';
    } else {
      if (cat === 'Chassis') return 'CHASSIS';
      if (cat === 'Engine') return 'ENGINE';
      if (cat === 'Tyres') return 'TYRES';
      if (cat === 'Driver1') return 'FIRST DRIVER';
      if (cat === 'Driver2') return 'SECOND DRIVER';
      if (cat === 'Principal') return 'TEAM PRINCIPAL';
    }
    return cat;
  }

  // ============================================================================
  // CHAMPIONSHIP GENERATION & STANDINGS INIT
  // ============================================================================

  initChampionshipAndRivals() {
    this.championship = new Championship();
    this.championship.generateCalendar();

    // 1. Create player team
    const playerTeam = new Team("Usuario F1 Team", true);
    playerTeam.chassis = this.userTeam.Chassis;
    playerTeam.engine = this.userTeam.Engine;
    playerTeam.tyres = this.userTeam.Tyres;
    playerTeam.principal = this.userTeam.Principal;
    playerTeam.drivers = [this.userTeam.Driver1, this.userTeam.Driver2];

    this.championship.teams.push(playerTeam);

    // 2. Generate 9 rival teams
    const rivalTeamNames = [
      "Scuderia Maranello",
      "Milton Keynes Racing",
      "Brackley Motorsport",
      "Woking GP",
      "Grove Heritage",
      "Enstone Team",
      "Faenza Squadra",
      "Kannapolis F1",
      "Hispania Racing"
    ];

    // Build the grid pool of drivers, excluding player selected drivers baseIds
    let availableRivalDrivers = DATABASE.drivers.filter(d => !this.selectedDriverBaseIds.has(d.baseId));

    // Strict duplication checker for rivals
    // Shuffle available pool
    availableRivalDrivers.sort(() => Math.random() - 0.5);

    const chosenDrivers = [];
    const chosenDriverBaseIds = new Set(this.selectedDriverBaseIds);

    for (let i = 0; i < availableRivalDrivers.length; i++) {
      const driver = availableRivalDrivers[i];
      if (!chosenDriverBaseIds.has(driver.baseId)) {
        chosenDrivers.push(driver);
        chosenDriverBaseIds.add(driver.baseId);
      }
      if (chosenDrivers.length === 18) break; // We need exactly 18 rival drivers (9 teams x 2)
    }

    // Build rival teams
    for (let i = 0; i < 9; i++) {
      const teamName = rivalTeamNames[i];
      const team = new Team(teamName, false);

      // Random parts (eras mixed)
      team.chassis = DATABASE.chassis[Math.floor(Math.random() * DATABASE.chassis.length)];
      team.engine = DATABASE.engines[Math.floor(Math.random() * DATABASE.engines.length)];
      team.tyres = DATABASE.tyres[Math.floor(Math.random() * DATABASE.tyres.length)];
      team.principal = DATABASE.principals[Math.floor(Math.random() * DATABASE.principals.length)];

      // Assign drivers
      team.drivers = [chosenDrivers[i * 2], chosenDrivers[i * 2 + 1]];

      this.championship.teams.push(team);
    }

    // Initialize standings structures
    this.championship.initStandings();

    // Initialize Simulator
    this.simulator = new RaceSimulator(this.championship);

    // Go to dashboard
    this.switchScreen('dashboard');
  }

  // ============================================================================
  // DASHBOARD RENDER
  // ============================================================================

  renderDashboard() {
    // Team Specs Card
    const specs = {
      es: {
        aero: "Aero", downforce: "Carga", weight: "Peso",
        speed: "Vel", reliability: "Fiab",
        wear: "Dura", temp: "Vent",
        box: "Box", strategy: "Estr"
      },
      en: {
        aero: "Aero", downforce: "Downforce", weight: "Weight",
        speed: "Speed", reliability: "Rel",
        wear: "Wear", temp: "Window",
        box: "Pit", strategy: "Strat"
      }
    };
    const s = specs[this.lang];
    document.getElementById('dash-drivers').innerText = `${this.userTeam.Driver1.name} / ${this.userTeam.Driver2.name}`;
    document.getElementById('dash-chassis').innerText = `${this.userTeam.Chassis.name} (${s.aero}:${this.userTeam.Chassis.aero} ${s.downforce}:${this.userTeam.Chassis.downforce} ${s.weight}:${this.userTeam.Chassis.weight})`;
    document.getElementById('dash-engine').innerText = `${this.userTeam.Engine.name} (${s.speed}:${this.userTeam.Engine.speed} ${s.reliability}:${this.userTeam.Engine.reliability})`;
    document.getElementById('dash-tyres').innerText = `${this.userTeam.Tyres.name} (${s.wear}:${this.userTeam.Tyres.wearRate} ${s.temp}:${this.userTeam.Tyres.tempWindow})`;
    document.getElementById('dash-principal').innerText = `${this.userTeam.Principal.name} (${s.box}:${this.userTeam.Principal.pitBonus} ${s.strategy}:${this.userTeam.Principal.strategyBonus})`;

    // Next Race Card
    const currentRaceNum = this.championship.currentRaceIndex + 1;
    const rawCircuit = this.championship.getCurrentCircuit();
    const circuit = getCircuitDetails(rawCircuit);

    document.getElementById('dash-race-num').innerText = currentRaceNum;
    document.getElementById('dash-circuit-name').innerText = `${circuit.name.toUpperCase()} (${circuit.country.toUpperCase()})`;
    document.getElementById('dash-circuit-desc').innerText = circuit.desc;

    document.getElementById('dash-circ-engine').style.width = `${(rawCircuit.engineDemand / 1.5) * 100}%`;
    document.getElementById('dash-circ-aero').style.width = `${(rawCircuit.aeroDemand / 1.5) * 100}%`;
    document.getElementById('dash-circ-wear').style.width = `${(rawCircuit.abrasion / 2.0) * 100}%`;

    // Render Standings tables
    this.renderStandingsTables();
  }

  renderStandingsTables() {
    // Drivers standings body
    const dBody = document.getElementById('dash-standings-drivers-body');
    dBody.innerHTML = "";
    this.championship.driversStandings.forEach((entry, idx) => {
      const tr = document.createElement('tr');
      const isUser = entry.teamName === "Usuario F1 Team";
      if (isUser) tr.className = "row-user-driver";

      tr.innerHTML = `
        <td class="font-bold text-accent">P${idx + 1}</td>
        <td>${entry.name} <span style="font-size:11px;color:var(--text-secondary)">[${entry.teamName}]</span></td>
        <td>${entry.era}</td>
        <td class="font-bold text-highlight">${entry.points}</td>
      `;
      dBody.appendChild(tr);
    });

    // Constructors standings body
    const cBody = document.getElementById('dash-standings-constructors-body');
    cBody.innerHTML = "";
    this.championship.constructorsStandings.forEach((entry, idx) => {
      const tr = document.createElement('tr');
      const isUser = entry.teamName === "Usuario F1 Team";
      if (isUser) tr.className = "row-user-driver";

      tr.innerHTML = `
        <td class="font-bold text-accent">P${idx + 1}</td>
        <td>
          <span class="font-bold">${entry.teamName}</span><br>
          <span style="font-size:11px;color:var(--text-secondary)">${entry.componentsDesc}</span>
        </td>
        <td class="font-bold text-highlight">${entry.points}</td>
      `;
      cBody.appendChild(tr);
    });
  }

  // ============================================================================
  // QUALIFYING CONTROLS
  // ============================================================================

  startQualiSession() {
    this.simulator.initQualifying();
    this.switchScreen('quali');

    const circuitDetails = getCircuitDetails(this.simulator.circuit);
    document.getElementById('quali-circuit-name').innerText = circuitDetails.name.toUpperCase();

    document.getElementById('quali-live-feed').innerHTML = this.lang === 'es'
      ? '<div class="feed-line"><span class="feed-time">10:00</span> ¡Semáforo en verde! Los coches inician la sesión.</div>'
      : '<div class="feed-line"><span class="feed-time">10:00</span> Green flag! Cars are heading out onto the track.</div>';

    this.buttons.skipQuali.classList.remove('hidden');
    this.buttons.startRace.classList.add('hidden');

    // Start tick loop
    this.simulator.speedMultiplier = 1;
    this.simulator.qualiIntervalId = setInterval(() => {
      this.simulator.simulateQualiStep(
        (update) => this.handleQualiUpdate(update),
        () => this.handleQualiFinished(),
        (newLeader) => this.handleQualiNewLeader(newLeader)
      );
    }, 120); // Fast ticks
  }

  handleQualiUpdate(update) {
    if (update.type === 'log') {
      const feed = document.getElementById('quali-live-feed');
      const line = document.createElement('div');
      line.className = "feed-line";

      const timeStr = this.simulator.formatQualiTimer(this.simulator.qualiTimer);
      const isHighlight = update.color === 'green';
      const colorClass = isHighlight ? 'text-green font-bold' : 'text-light';

      line.innerHTML = `<span class="feed-time">${timeStr}</span> <span class="${colorClass}">${update.text}</span>`;
      feed.appendChild(line);
      feed.scrollTop = feed.scrollHeight;
    }
    else if (update.type === 'timer') {
      document.getElementById('quali-timer').innerText = update.timeStr;
      this.renderQualiLeaderboard(update.standings);
    }
  }

  handleQualiNewLeader(leaderCar) {
    const feed = document.getElementById('quali-live-feed');
    const line = document.createElement('div');
    line.className = "feed-line";
    const timeStr = this.simulator.formatQualiTimer(this.simulator.qualiTimer);

    line.innerHTML = `<span class="feed-time">${timeStr}</span> <span class="feed-purple">⚡ ¡NUEVA POLE PROVISIONAL! ${leaderCar.driver.name} marca ${this.simulator.formatLapTime(leaderCar.bestLap)}.</span>`;
    feed.appendChild(line);
    feed.scrollTop = feed.scrollHeight;
  }

  handleQualiFinished() {
    document.getElementById('quali-timer').innerText = "00:00";

    const feed = document.getElementById('quali-live-feed');
    const line = document.createElement('div');
    line.className = "feed-line";
    line.innerHTML = `<span class="feed-time">00:00</span> <span class="text-highlight font-bold">🏁 ¡BANDERA A CUADROS! La clasificación ha concluido.</span>`;
    feed.appendChild(line);
    feed.scrollTop = feed.scrollHeight;

    this.buttons.skipQuali.classList.add('hidden');
    this.buttons.startRace.classList.remove('hidden');

    this.renderQualiLeaderboard(this.simulator.qualiStandings);
  }

  skipQualiSimulation() {
    clearInterval(this.simulator.qualiIntervalId);

    // Simulate immediately to the end
    this.simulator.speedMultiplier = 100; // Ultra speed
    while (this.simulator.qualiActive) {
      this.simulator.simulateQualiStep(
        () => { }, // No UI updates during skip to preserve performance
        () => this.handleQualiFinished(),
        () => { }
      );
    }
  }

  renderQualiLeaderboard(standings) {
    const body = document.getElementById('quali-leaderboard-body');
    body.innerHTML = "";

    const poleTime = standings[0].bestLap;

    standings.forEach((car, idx) => {
      const tr = document.createElement('tr');
      const isUser = car.team.isPlayer;
      if (isUser) tr.className = "row-user-driver";

      const timeStr = car.bestLap === Infinity ? "SIN TIEMPO" : this.simulator.formatLapTime(car.bestLap);
      let gapStr = "--";
      if (car.bestLap !== Infinity && idx > 0 && poleTime !== Infinity) {
        gapStr = `+${(car.bestLap - poleTime).toFixed(3)}s`;
      } else if (idx === 0 && car.bestLap !== Infinity) {
        gapStr = "LÍDER";
      }

      tr.innerHTML = `
        <td class="font-bold text-accent">P${idx + 1}</td>
        <td>${car.driver.name} <span style="font-size:10px;color:var(--text-secondary)">[${car.team.name}]</span></td>
        <td class="font-bold">${timeStr}</td>
        <td class="text-highlight font-bold">${gapStr}</td>
      `;
      body.appendChild(tr);
    });
  }

  // ============================================================================
  // RACE CONTROLS & TELEMETRY
  // ============================================================================

  startRaceSession(strategy) {
    if (!strategy) {
      strategy = {
        d1: { startTyre: 'Medium', pitLap: 7, nextTyre: 'Hard' },
        d2: { startTyre: 'Medium', pitLap: 8, nextTyre: 'Hard' }
      };
    }

    this.simulator.initRace(this.simulator.qualiStandings, strategy);
    this.switchScreen('race');

    // UI resets
    document.getElementById('race-circuit-name').innerText = this.simulator.circuit.name.toUpperCase();
    document.getElementById('race-total-laps').innerText = this.simulator.raceLaps;
    document.getElementById('race-finish-panel').classList.add('hidden');

    // Reset Driver Control Panels
    const uD1 = this.simulator.participants.find(p => p.driver.baseId === this.userTeam.Driver1.baseId);
    const uD2 = this.simulator.participants.find(p => p.driver.baseId === this.userTeam.Driver2.baseId);

    document.getElementById('r-d1-name').innerText = uD1.driver.name;
    document.getElementById('r-d2-name').innerText = uD2.driver.name;

    // Reset next tyres dropdown and planned lap from strategy
    document.getElementById('r-d1-next-tyre').value = strategy.d1.nextTyre;
    document.getElementById('r-d2-next-tyre').value = strategy.d2.nextTyre;
    uD1.nextTyreSelected = strategy.d1.nextTyre;
    uD2.nextTyreSelected = strategy.d2.nextTyre;

    // Reset push buttons UI
    document.querySelectorAll('#ctrl-driver1 .pace-selector button').forEach(b => {
      b.classList.toggle('active', b.dataset.pace === 'balanced');
    });
    document.querySelectorAll('#ctrl-driver2 .pace-selector button').forEach(b => {
      b.classList.toggle('active', b.dataset.pace === 'balanced');
    });
    uD1.pushMode = 'balanced';
    uD2.pushMode = 'balanced';

    this.updateRaceUI();

    // Start Race Loop
    this.simulator.speedMultiplier = 1;
    document.querySelectorAll('#speed-controls button').forEach(b => {
      b.classList.toggle('active', b.dataset.speed === '1');
    });
    this.startRaceInterval();
  }

  renderPreRaceStrategy() {
    const rawCircuit = this.simulator.championship.getCurrentCircuit();
    const circuit = getCircuitDetails(rawCircuit);
    const totalLaps = circuit.name === "Monza" ? 16 : (circuit.name === "Mónaco" || circuit.name === "Monaco" ? 22 : 18);

    document.getElementById('pre-circuit-name').innerText = circuit.name.toUpperCase();
    document.getElementById('pre-total-laps').innerText = totalLaps;

    const d1Name = this.userTeam.Driver1.name;
    const d2Name = this.userTeam.Driver2.name;

    const posD1 = this.simulator.qualiStandings.findIndex(q => q.driver.baseId === this.userTeam.Driver1.baseId) + 1;
    const posD2 = this.simulator.qualiStandings.findIndex(q => q.driver.baseId === this.userTeam.Driver2.baseId) + 1;

    const gridLabel = this.lang === 'es' ? 'Parrilla' : 'Grid';
    document.getElementById('pre-d1-title').innerText = `${d1Name} (${gridLabel}: P${posD1})`;
    document.getElementById('pre-d2-title').innerText = `${d2Name} (${gridLabel}: P${posD2})`;

    // Configure sliders
    ['d1', 'd2'].forEach(dKey => {
      const slider = document.getElementById(`pre-${dKey}-pit-lap`);
      const display = document.getElementById(`pre-${dKey}-pit-lap-display`);
      const maxLabel = document.getElementById(`pre-${dKey}-slider-max`);
      slider.min = 2;
      slider.max = totalLaps - 1;
      const defaultVal = dKey === 'd1' ? Math.floor(totalLaps / 2) - 1 : Math.floor(totalLaps / 2) + 1;
      slider.value = Math.max(2, defaultVal);
      display.innerText = slider.value;

      const lapLabel = this.lang === 'es' ? 'Vta' : 'Lap';
      maxLabel.innerText = `${lapLabel} ${totalLaps - 1}`;
    });

    // Calculate recommended strategy based on circuit
    const rec = this.calculateRecommendedStrategy(circuit, totalLaps);
    document.getElementById('pre-recommended-text').innerHTML = rec.text;

    // Draw optimal range on sliders
    ['d1', 'd2'].forEach(dKey => {
      const slider = document.getElementById(`pre-${dKey}-pit-lap`);
      const rangeEl = document.getElementById(`pre-${dKey}-optimal-range`);
      const sliderWidth = 100; // percent
      const totalRange = (totalLaps - 1) - 2; // max - min
      const leftPct = ((rec.optimalStart - 2) / totalRange) * sliderWidth;
      const widthPct = ((rec.optimalEnd - rec.optimalStart) / totalRange) * sliderWidth;
      rangeEl.style.left = `${leftPct}%`;
      rangeEl.style.width = `${widthPct}%`;
    });
  }

  calculateRecommendedStrategy(circuit, totalLaps) {
    // High abrasion = early pit, low abrasion = late pit
    const abrasion = circuit.abrasion || 1.0;
    let startTyreKey, nextTyreKey, optimalLap;

    if (abrasion >= 1.3) {
      // High wear circuits (Barcelona, etc) - start Medium, switch to Hard early
      startTyreKey = 'opt_medium';
      nextTyreKey = 'opt_hard';
      optimalLap = Math.max(3, Math.floor(totalLaps * 0.35));
    } else if (abrasion <= 0.7) {
      // Low wear circuits (Monza, etc) - start Soft, switch to Hard late
      startTyreKey = 'opt_soft';
      nextTyreKey = 'opt_hard';
      optimalLap = Math.max(3, Math.floor(totalLaps * 0.55));
    } else {
      // Normal circuits - start Medium, switch to Hard at midpoint
      startTyreKey = 'opt_medium';
      nextTyreKey = 'opt_hard';
      optimalLap = Math.max(3, Math.floor(totalLaps * 0.45));
    }

    const optimalStart = Math.max(2, optimalLap - 2);
    const optimalEnd = Math.min(totalLaps - 2, optimalLap + 2);

    const startTyre = TRANSLATIONS[this.lang][startTyreKey];
    const nextTyre = TRANSLATIONS[this.lang][nextTyreKey];

    const text = this.lang === 'es'
      ? `Salida con <strong class="text-highlight">${startTyre}</strong> → Parada en vuelta <strong class="text-cyan">${optimalLap}</strong> (rango óptimo: ${optimalStart}-${optimalEnd}) → Montar <strong class="text-highlight">${nextTyre}</strong>. Abrasión del circuito: ${(abrasion * 100).toFixed(0)}%.`
      : `Start with <strong class="text-highlight">${startTyre}</strong> → Pit stop on lap <strong class="text-cyan">${optimalLap}</strong> (optimal range: ${optimalStart}-${optimalEnd}) → Fit <strong class="text-highlight">${nextTyre}</strong>. Circuit abrasion: ${(abrasion * 100).toFixed(0)}%.`;

    return { startTyre, nextTyre, optimalLap, optimalStart, optimalEnd, text };
  }

  skipRaceSimulation() {
    if (!this.simulator.raceActive) return;

    if (this.simulator.raceIntervalId) clearInterval(this.simulator.raceIntervalId);

    while (this.simulator.raceActive) {
      // Auto strategy decisions for player drivers in skip simulation
      this.simulator.participants.forEach(p => {
        if (p.isUserDriver && p.status === 'active') {
          // Trigger pit stop automatically if tyre wear is high (<25%)
          if (p.tyreHealth < 25.0 && !p.pitStopScheduledThisLap && p.pitStops === 0) {
            p.pitStopScheduledThisLap = true;
            // Enforce F1 tyres rules (different compound than starting one)
            if (p.tyreCompound === 'Medium') {
              p.nextTyreSelected = p.nextTyreSelected === 'Medium' ? 'Hard' : p.nextTyreSelected;
            } else if (p.tyreCompound === 'Soft') {
              p.nextTyreSelected = p.nextTyreSelected === 'Soft' ? 'Medium' : p.nextTyreSelected;
            } else if (p.tyreCompound === 'Hard') {
              p.nextTyreSelected = p.nextTyreSelected === 'Hard' ? 'Medium' : p.nextTyreSelected;
            }
          }

          // Rain tires crossovers during skip
          const needsWet = this.simulator.trackWetness >= 0.5 && p.tyreCompound !== 'Wet';
          const needsInter = this.simulator.trackWetness >= 0.2 && this.simulator.trackWetness < 0.5 && p.tyreCompound !== 'Intermediate';
          if ((needsWet || needsInter) && p.pitStops < 3) {
            p.pitStopScheduledThisLap = true;
            p.nextTyreSelected = needsWet ? 'Wet' : 'Intermediate';
          }
        }
      });

      this.simulator.simulateRaceLap(
        () => { },
        () => { }
      );
    }

    // Al darle a skip, cargamos toda la telemetría para que el usuario la visualice al completo
    this.simulator.raceCommentary = [...this.simulator.fullRaceCommentary];

    this.generateRaceSummary();
    this.updateRaceUI();
    this.handleRaceFinished();
  }

  generateRaceSummary() {
    // Build a compact summary of the race that just finished
    const sim = this.simulator;
    const summary = [];
    const circuit = sim.circuit.name;

    // Winner
    const winner = sim.participants.find(p => p.status === 'active');
    if (winner) summary.push(`🏆 Ganador: ${winner.driver.name} (${winner.team.name})`);

    // User driver results
    const userDrivers = sim.participants.filter(p => p.isUserDriver);
    userDrivers.forEach(ud => {
      const pos = sim.participants.indexOf(ud) + 1;
      if (ud.status === 'dsq') summary.push(`❌ ${ud.driver.name}: DESCALIFICADO`);
      else if (ud.status === 'dnf') summary.push(`⚠️ ${ud.driver.name}: RETIRADO`);
      else summary.push(`📊 ${ud.driver.name}: P${pos} (${ud.pitStops} parada${ud.pitStops !== 1 ? 's' : ''})`);
    });

    // DNFs
    const dnfs = sim.participants.filter(p => p.status === 'dnf');
    if (dnfs.length > 0) summary.push(`💥 Abandonos: ${dnfs.map(d => d.driver.name).join(', ')}`);

    // DSQs
    const dsqs = sim.participants.filter(p => p.status === 'dsq');
    if (dsqs.length > 0) summary.push(`❌ Descalificados: ${dsqs.map(d => d.driver.name).join(', ')}`);

    // Prepend summary to commentary
    summary.reverse().forEach(line => sim.raceCommentary.unshift(line));
    sim.raceCommentary.unshift(`📋 ═══ RESUMEN DEL GP DE ${circuit.toUpperCase()} ═══`);
  }

  startRaceInterval() {
    if (this.simulator.raceIntervalId) clearInterval(this.simulator.raceIntervalId);

    // Lap frequency scaled by game speed
    // 1x = 2000ms per lap, 3x = 750ms, 10x = 200ms
    let intervalTime = 2000;
    if (this.simulator.speedMultiplier === 3) intervalTime = 700;
    if (this.simulator.speedMultiplier === 10) intervalTime = 220;

    this.simulator.raceIntervalId = setInterval(() => {
      this.simulator.simulateRaceLap(
        () => this.updateRaceUI(),
        () => this.handleRaceFinished()
      );
    }, intervalTime);
  }

  updateGameSpeed(speed) {
    this.simulator.speedMultiplier = speed;
    if (this.simulator.raceActive) {
      this.startRaceInterval(); // Restart interval with new timings
    }
  }

  updateDriverPushMode(driverIdx, pace) {
    const userDrivers = [this.userTeam.Driver1, this.userTeam.Driver2];
    const target = this.simulator.participants.find(p => p.driver.baseId === userDrivers[driverIdx].baseId);
    if (target) {
      target.pushMode = pace;
    }
  }

  scheduleDriverPit(driverIdx) {
    const userDrivers = [this.userTeam.Driver1, this.userTeam.Driver2];
    const target = this.simulator.participants.find(p => p.driver.baseId === userDrivers[driverIdx].baseId);

    if (target && target.status === 'active') {
      const nextTyreSelect = document.getElementById(`r-d${driverIdx + 1}-next-tyre`).value;
      target.nextTyreSelected = nextTyreSelect;
      target.pitStopScheduledThisLap = true;

      const compoundTranslated = this.simulator.translateCompound(nextTyreSelect).toUpperCase();
      document.getElementById(`r-d${driverIdx + 1}-status`).innerText = this.lang === 'es'
        ? `ORDENADA PARADA EN BOXES: MONTA ${compoundTranslated}`
        : `PIT STOP ORDERED: FIT ${compoundTranslated}`;
      document.getElementById(`ctrl-driver${driverIdx + 1}`).classList.add('active-pitting');
    }
  }

  updateRaceUI() {
    // Current lap
    document.getElementById('race-curr-lap').innerText = this.simulator.currentLap;
    const progressPct = (this.simulator.currentLap / this.simulator.raceLaps) * 100;
    document.getElementById('race-global-progress').style.width = `${progressPct}%`;

    // Weather Display Update
    const weatherText = {
      es: {
        soleado: "☀️ SOLEADO",
        nublado: "☁️ NUBLADO",
        lluvia_ligera: "🌧️ LLUVIA LIGERA",
        lluvia_fuerte: "⛈️ LLUVIA FUERTE"
      },
      en: {
        soleado: "☀️ SUNNY",
        nublado: "☁️ CLOUDY",
        lluvia_ligera: "🌧️ LIGHT RAIN",
        lluvia_fuerte: "⛈️ HEAVY RAIN"
      }
    };

    document.getElementById('race-weather-status').innerText = weatherText[this.lang][this.simulator.weather] || (this.lang === 'es' ? "☀️ SOLEADO" : "☀️ SUNNY");

    const wetPct = Math.round(this.simulator.trackWetness * 100);
    let wetDesc = "";
    if (this.lang === 'es') {
      if (wetPct === 0) wetDesc = "SECA (0%)";
      else if (wetPct < 20) wetDesc = `CASI SECA (${wetPct}%)`;
      else if (wetPct < 50) wetDesc = `HÚMEDA (${wetPct}%)`;
      else if (wetPct < 85) wetDesc = `MOJADA (${wetPct}%)`;
      else wetDesc = `INUNDADA (${wetPct}%)`;
    } else {
      if (wetPct === 0) wetDesc = "DRY (0%)";
      else if (wetPct < 20) wetDesc = `DAMP (${wetPct}%)`;
      else if (wetPct < 50) wetDesc = `WET (${wetPct}%)`;
      else if (wetPct < 85) wetDesc = `VERY WET (${wetPct}%)`;
      else wetDesc = `FLOODED (${wetPct}%)`;
    }

    const wetLabel = document.getElementById('race-track-wetness');
    wetLabel.innerText = wetDesc;

    if (wetPct === 0) {
      wetLabel.className = 'text-accent';
    } else if (wetPct < 50) {
      wetLabel.className = 'text-highlight';
    } else {
      wetLabel.className = 'text-cyan';
    }

    // 1. User Drivers Specific Telemetry Update
    const userDrivers = [this.userTeam.Driver1, this.userTeam.Driver2];

    userDrivers.forEach((dr, idx) => {
      const p = this.simulator.participants.find(car => car.driver.baseId === dr.baseId);
      const suffix = idx + 1;

      if (!p) return;

      const pos = this.simulator.participants.indexOf(p) + 1;
      document.getElementById(`r-d${suffix}-pos`).innerText = `P${pos}`;

      // Tyre wear bar
      const bar = document.getElementById(`r-d${suffix}-tyre-bar`);
      const pct = document.getElementById(`r-d${suffix}-tyre-pct`);
      const label = document.getElementById(`r-d${suffix}-tyre-label`);

      pct.innerText = `${p.tyreHealth.toFixed(0)}%`;
      bar.style.width = `${p.tyreHealth}%`;

      const lapLabel = this.lang === 'es' ? 'Vta' : 'Lap';
      label.innerText = `${this.simulator.translateCompound(p.tyreCompound)} (${lapLabel}:${p.tyreLife})`;

      // Color coding for tyre health
      bar.className = "progress-bar-fill";
      if (p.tyreHealth > 50) bar.classList.add('bg-green');
      else if (p.tyreHealth > 25) bar.classList.add('bg-yellow');
      else bar.classList.add('bg-red');

      // Gap telemetry
      document.getElementById(`r-d${suffix}-gap`).innerText = p.gapStr;

      // Card Pit State resets
      if (p.status === 'dnf') {
        document.getElementById(`r-d${suffix}-status`).innerText = this.lang === 'es' ? "ESTADO: RETIRADO (DNF)" : "STATUS: RETIRED (DNF)";
        document.getElementById(`ctrl-driver${suffix}`).classList.remove('active-pitting');
      } else if (p.status === 'dsq') {
        document.getElementById(`r-d${suffix}-status`).innerText = this.lang === 'es' ? "ESTADO: DESCALIFICADO (DSQ)" : "STATUS: DISQUALIFIED (DSQ)";
        document.getElementById(`ctrl-driver${suffix}`).classList.remove('active-pitting');
      } else if (!p.pitStopScheduledThisLap) {
        document.getElementById(`r-d${suffix}-status`).innerText = this.lang === 'es' ? "ESTADO: EN PISTA" : "STATUS: ON TRACK";
        document.getElementById(`ctrl-driver${suffix}`).classList.remove('active-pitting');
      }
    });

    // 2. Leaderboard Telemetry Update
    const body = document.getElementById('race-leaderboard-body');

    // Save current TR IDs to check if rows need animation
    const oldRowOrder = Array.from(body.querySelectorAll('tr')).map(r => r.dataset.driverBaseId);

    body.innerHTML = "";

    this.simulator.participants.forEach((p, idx) => {
      const tr = document.createElement('tr');
      tr.dataset.driverBaseId = p.driver.baseId;

      if (p.isUserDriver) {
        tr.className = "row-user-driver";
      }

      if (p.status === 'dnf') {
        tr.classList.add('row-dnf');
      } else if (p.status === 'dsq') {
        tr.classList.add('row-dsq');
      }

      // Check if position was gained relative to the previous lap representation
      const oldIdx = oldRowOrder.indexOf(p.driver.baseId);
      if (oldIdx !== -1 && oldIdx > idx && p.status === 'active') {
        tr.classList.add('row-overtaken');
      }

      const compClass = `tyre-pill tyre-${p.tyreCompound.charAt(0)}`;
      const wearStr = (p.status === 'dnf' || p.status === 'dsq') ? "--" : `${p.tyreHealth.toFixed(0)}%`;

      const dnfStr = this.lang === 'es' ? "RETIRADO" : "RETIRED";
      const dsqStr = this.lang === 'es' ? "DESCALIFICADO" : "DISQUALIFIED";
      const leaderStr = this.lang === 'es' ? "LÍDER" : "LEADER";
      const timeStr = p.status === 'dnf' ? dnfStr : (p.status === 'dsq' ? dsqStr : (idx === 0 ? leaderStr : p.gapStr));

      tr.innerHTML = `
        <td class="font-bold text-accent">P${idx + 1}</td>
        <td>
          <span class="driver-pos-badge" style="background-color:${p.isUserDriver ? 'var(--neon-cyan)' : 'var(--bg-primary)'};color:${p.isUserDriver ? 'var(--bg-primary)' : 'var(--text-secondary)'};font-size:10px;padding:1px 4px;margin-right:5px;">P${idx + 1}</span>
          <strong>${p.driver.name}</strong> <span style="font-size:10px;color:var(--text-secondary)">(${p.team.name})</span>
        </td>
        <td><span class="${compClass}">${p.tyreCompound.charAt(0)}</span></td>
        <td class="font-bold">${wearStr}</td>
        <td class="text-highlight font-bold text-right">${timeStr}</td>
        <td class="text-center font-bold">${p.pitStops}</td>
      `;
      body.appendChild(tr);
    });

    // 3. Commentary Update
    const feed = document.getElementById('race-feed-box');
    feed.innerHTML = "";

    this.simulator.raceCommentary.slice(0, 30).forEach(log => {
      const line = document.createElement('div');
      line.className = "feed-line";

      // Basic syntax highlighter for logs
      if (log.includes('📻')) {
        line.className = "feed-line text-radio";
        line.innerHTML = `<span>${log}</span>`;
      } else if (log.includes('⚔️') || log.includes('¡ADELANTAMIENTO!')) {
        line.innerHTML = `<span class="text-cyan">${log}</span>`;
      } else if (log.includes('⚠️') || log.includes('ABANDONA')) {
        line.innerHTML = `<span class="text-red font-bold">${log}</span>`;
      } else if (log.includes('🔧') || log.includes('PARADA')) {
        line.innerHTML = `<span class="text-highlight">${log}</span>`;
      } else if (log.includes('🏁') || log.includes('🌤️')) {
        line.innerHTML = `<span class="feed-purple">${log}</span>`;
      } else {
        line.innerHTML = `<span>${log}</span>`;
      }

      feed.appendChild(line);
    });
  }

  handleRaceFinished() {
    this.updateRaceUI();
    document.getElementById('race-finish-panel').classList.remove('hidden');
  }

  // ============================================================================
  // POST-RACE STANDINGS & ADVANCEMENT
  // ============================================================================

  showPostRaceStandings() {
    this.switchScreen('standings');

    // 1. Process points in championship
    this.championship.awardPoints(this.simulator.participants);

    // Track season stats
    this.trackGPStats();

    // 2. Render Race Results left table
    const resultsBody = document.getElementById('race-results-body');
    resultsBody.innerHTML = "";

    this.simulator.participants.forEach((p, idx) => {
      const tr = document.createElement('tr');
      const isUser = p.team.isPlayer;
      if (isUser) tr.className = "row-user-driver";

      let statusTime = this.lang === 'es' ? "RETIRADO" : "RETIRED";
      if (p.status === 'active') {
        statusTime = idx === 0 ? (this.lang === 'es' ? "GANADOR" : "WINNER") : p.gapStr;
      } else if (p.status === 'dsq') {
        statusTime = this.lang === 'es' ? "DESCALIFICADO (DSQ)" : "DISQUALIFIED (DSQ)";
        tr.className += " row-dsq";
      }

      const points = (p.status === 'active' && idx < 10) ? FIA_POINTS[idx] : 0;
      const ptsHTML = points > 0 ? `<span class="text-highlight font-bold">+${points}</span>` : `0`;

      tr.innerHTML = `
        <td class="font-bold text-accent">P${idx + 1}</td>
        <td>${p.driver.name} <br><span style="font-size:10px;color:var(--text-secondary)">[${p.team.name}]</span></td>
        <td class="font-bold">${statusTime}</td>
        <td class="font-bold">${ptsHTML}</td>
      `;
      resultsBody.appendChild(tr);
    });

    // 3. Render Updated Championship Standings right table
    this.renderResultsStandingsTables();

    // 4. Update championship control text
    const totalGP = this.championship.seasonCircuits.length;
    const currentGP = this.championship.currentRaceIndex + 1;

    const btnSimRest = document.getElementById('btn-sim-rest-championship');
    const btnViewSummary = document.getElementById('btn-view-season-summary');

    if (currentGP < totalGP) {
      const nextCircuit = getCircuitDetails(this.championship.seasonCircuits[currentGP]);
      document.getElementById('championship-status-text').innerText = this.lang === 'es'
        ? `GP ${currentGP}/${totalGP} finalizado. La próxima cita es el GP de ${nextCircuit.name}.`
        : `GP ${currentGP}/${totalGP} completed. Up next is the GP of ${nextCircuit.name}.`;
      this.buttons.nextRace.classList.remove('hidden');
      this.buttons.restartChampionship.classList.add('hidden');
      if (btnSimRest) btnSimRest.classList.remove('hidden');
      if (btnViewSummary) btnViewSummary.classList.add('hidden');
    } else {
      const driverChampion = this.championship.driversStandings[0];
      const constructorChampion = this.championship.constructorsStandings[0];

      if (this.lang === 'es') {
        document.getElementById('championship-status-text').innerHTML = `
          🏆 <strong class="pulse-text text-highlight">¡TEMPORADA COMPLETADA!</strong> 🏆<br>
          Campeón del Mundo de Pilotos: <strong>${driverChampion.name}</strong> (${driverChampion.points} pts)<br>
          Campeón del Mundo de Constructores: <strong>${constructorChampion.teamName}</strong> (${constructorChampion.points} pts)
        `;
      } else {
        document.getElementById('championship-status-text').innerHTML = `
          🏆 <strong class="pulse-text text-highlight">SEASON COMPLETED!</strong> 🏆<br>
          Drivers World Champion: <strong>${driverChampion.name}</strong> (${driverChampion.points} pts)<br>
          Constructors World Champion: <strong>${constructorChampion.teamName}</strong> (${constructorChampion.points} pts)
        `;
      }

      this.buttons.nextRace.classList.add('hidden');
      this.buttons.restartChampionship.classList.remove('hidden');
      if (btnSimRest) btnSimRest.classList.add('hidden');
      if (btnViewSummary) btnViewSummary.classList.remove('hidden');
    }
  }

  trackGPStats() {
    // Track quali positions
    const qualiD1Pos = this.simulator.qualiStandings.findIndex(q => q.driver.baseId === this.userTeam.Driver1.baseId) + 1;
    const qualiD2Pos = this.simulator.qualiStandings.findIndex(q => q.driver.baseId === this.userTeam.Driver2.baseId) + 1;
    this.seasonStats.d1.qualiPositions.push(qualiD1Pos);
    this.seasonStats.d2.qualiPositions.push(qualiD2Pos);

    // Track race positions
    const raceD1 = this.simulator.participants.find(p => p.driver.baseId === this.userTeam.Driver1.baseId);
    const raceD2 = this.simulator.participants.find(p => p.driver.baseId === this.userTeam.Driver2.baseId);

    if (raceD1) {
      if (raceD1.status === 'dnf') { this.seasonStats.d1.dnfs++; this.seasonStats.d1.racePositions.push(null); }
      else if (raceD1.status === 'dsq') { this.seasonStats.d1.dsqs++; this.seasonStats.d1.racePositions.push(null); }
      else { this.seasonStats.d1.racePositions.push(this.simulator.participants.indexOf(raceD1) + 1); }
    }
    if (raceD2) {
      if (raceD2.status === 'dnf') { this.seasonStats.d2.dnfs++; this.seasonStats.d2.racePositions.push(null); }
      else if (raceD2.status === 'dsq') { this.seasonStats.d2.dsqs++; this.seasonStats.d2.racePositions.push(null); }
      else { this.seasonStats.d2.racePositions.push(this.simulator.participants.indexOf(raceD2) + 1); }
    }
  }

  renderResultsStandingsTables() {
    // Drivers
    const dBody = document.getElementById('results-drivers-body');
    dBody.innerHTML = "";
    this.championship.driversStandings.forEach((entry, idx) => {
      const tr = document.createElement('tr');
      const isUser = entry.teamName === "Usuario F1 Team";
      if (isUser) tr.className = "row-user-driver";

      tr.innerHTML = `
        <td class="font-bold text-accent">P${idx + 1}</td>
        <td><strong>${entry.name}</strong><br><span style="font-size:10px;color:var(--text-secondary)">${entry.teamName}</span></td>
        <td>${entry.era}</td>
        <td class="font-bold text-highlight">${entry.points}</td>
      `;
      dBody.appendChild(tr);
    });

    // Constructors
    const cBody = document.getElementById('results-constructors-body');
    cBody.innerHTML = "";
    this.championship.constructorsStandings.forEach((entry, idx) => {
      const tr = document.createElement('tr');
      const isUser = entry.teamName === "Usuario F1 Team";
      if (isUser) tr.className = "row-user-driver";

      tr.innerHTML = `
        <td class="font-bold text-accent">P${idx + 1}</td>
        <td>
          <strong>${entry.teamName}</strong><br>
          <span style="font-size:10px;color:var(--text-secondary)">${entry.componentsDesc}</span>
        </td>
        <td class="font-bold text-highlight">${entry.points}</td>
      `;
      cBody.appendChild(tr);
    });
  }

  advanceToNextGP() {
    this.championship.currentRaceIndex += 1;
    this.switchScreen('dashboard');
  }

  // ============================================================================
  // STORY MODE - AUTO SIMULATION
  // ============================================================================

  async simulateFullChampionshipStoryMode() {
    this.switchScreen('story');
    this.storySkipRequested = false;
    document.getElementById('btn-story-skip').classList.remove('hidden');
    document.getElementById('story-title').innerText = 'SIMULACIÓN DEL CAMPEONATO';
    document.getElementById('story-subtitle').innerText = 'Campeonato en curso...';

    const feed = document.getElementById('story-ticker-feed');
    feed.innerHTML = '';

    // Render initial standings in live panel
    this.renderStoryStandings();

    const totalGPs = this.championship.seasonCircuits.length;
    const startIdx = this.championship.currentRaceIndex;

    for (let gpIdx = startIdx; gpIdx < totalGPs; gpIdx++) {
      if (this.storySkipRequested) {
        // Simulate remaining GPs instantly without animation
        this.championship.currentRaceIndex = gpIdx;
        this.simulateQualiInstant();
        const strat = this.generateAutoStrategy();
        this.simulator.initRace(this.simulator.qualiStandings, strat);
        this.runInstantRace();
        this.championship.awardPoints(this.simulator.participants);
        this.trackGPStats();
        continue;
      }

      this.championship.currentRaceIndex = gpIdx;
      const circuit = this.championship.getCurrentCircuit();

      // Ticker: GP header
      this.addTickerLine(`🏁 GP ${gpIdx + 1}/${totalGPs} — ${circuit.name.toUpperCase()}`, 'gp-header');
      await this.delay(400);

      // Simulate Quali
      this.simulateQualiInstant();
      const qualiP1 = this.simulator.qualiStandings.findIndex(q => q.driver.baseId === this.userTeam.Driver1.baseId) + 1;
      const qualiP2 = this.simulator.qualiStandings.findIndex(q => q.driver.baseId === this.userTeam.Driver2.baseId) + 1;
      this.addTickerLine(`⏱️ Clasificación: ${this.userTeam.Driver1.name} P${qualiP1}, ${this.userTeam.Driver2.name} P${qualiP2}`);
      await this.delay(600);

      // Simulate Race
      const strat = this.generateAutoStrategy();
      this.simulator.initRace(this.simulator.qualiStandings, strat);
      this.runInstantRace();

      // Award points and track stats
      this.championship.awardPoints(this.simulator.participants);
      this.trackGPStats();

      // Narrate results
      const winner = this.simulator.participants.find(p => p.status === 'active');
      if (winner) {
        const isUserWin = winner.isUserDriver;
        this.addTickerLine(`🏆 Ganador: ${winner.driver.name}`, isUserWin ? 'highlight' : '');
      }

      // User drivers
      [this.userTeam.Driver1, this.userTeam.Driver2].forEach(ud => {
        const p = this.simulator.participants.find(pp => pp.driver.baseId === ud.baseId);
        if (!p) return;
        const pos = this.simulator.participants.indexOf(p) + 1;
        if (p.status === 'dsq') this.addTickerLine(`❌ ${ud.name}: DESCALIFICADO`, 'warning');
        else if (p.status === 'dnf') this.addTickerLine(`⚠️ ${ud.name}: RETIRADO`, 'warning');
        else if (pos <= 3) this.addTickerLine(`🎉 ${ud.name}: P${pos} ¡PODIO!`, 'highlight');
        else this.addTickerLine(`📊 ${ud.name}: P${pos}`);
      });

      // DNFs summary
      const dnfs = this.simulator.participants.filter(p => p.status === 'dnf');
      if (dnfs.length > 0) this.addTickerLine(`💥 Abandonos: ${dnfs.map(d => d.driver.name).join(', ')}`);

      // Update standings display
      this.renderStoryStandings();

      await this.delay(this.storySkipRequested ? 50 : 2500);
    }

    // Championship complete
    const dc = this.championship.driversStandings[0];
    const cc = this.championship.constructorsStandings[0];
    this.addTickerLine(``, '');
    this.addTickerLine(`🏆🏆🏆 ¡CAMPEONATO FINALIZADO! 🏆🏆🏆`, 'gp-header');
    this.addTickerLine(`👑 Campeón de Pilotos: ${dc.name} (${dc.points} pts)`, 'highlight');
    this.addTickerLine(`🔧 Campeón de Constructores: ${cc.teamName} (${cc.points} pts)`, 'highlight');

    document.getElementById('story-subtitle').innerText = '¡Temporada finalizada!';
    document.getElementById('btn-story-skip').innerText = 'VER RESUMEN DE TEMPORADA';
    document.getElementById('btn-story-skip').classList.remove('hidden');
    document.getElementById('btn-story-skip').onclick = () => {
      this.renderSeasonSummary();
      this.switchScreen('seasonSummary');
    };
  }

  async simulateSingleGPStoryMode() {
    // Read strategy from form
    const d1StartTyre = document.getElementById('pre-d1-start-tyre').value;
    const d1PitLap = parseInt(document.getElementById('pre-d1-pit-lap').value) || 7;
    const d1NextTyre = document.getElementById('pre-d1-next-tyre').value;
    const d2StartTyre = document.getElementById('pre-d2-start-tyre').value;
    const d2PitLap = parseInt(document.getElementById('pre-d2-pit-lap').value) || 8;
    const d2NextTyre = document.getElementById('pre-d2-next-tyre').value;
    const strat = {
      d1: { startTyre: d1StartTyre, pitLap: d1PitLap, nextTyre: d1NextTyre },
      d2: { startTyre: d2StartTyre, pitLap: d2PitLap, nextTyre: d2NextTyre }
    };

    this.switchScreen('story');
    this.storySkipRequested = false;
    document.getElementById('btn-story-skip').classList.add('hidden');

    const circuit = this.championship.getCurrentCircuit();
    const feed = document.getElementById('story-ticker-feed');
    feed.innerHTML = '';

    document.getElementById('story-title').innerText = `GP DE ${circuit.name.toUpperCase()}`;
    document.getElementById('story-subtitle').innerText = 'Simulando GP...';

    this.addTickerLine(`🏁 GP DE ${circuit.name.toUpperCase()}`, 'gp-header');
    await this.delay(500);

    // Race simulation
    this.simulator.initRace(this.simulator.qualiStandings, strat);

    // Render initial standings in live panel
    this.renderStoryStandings();

    this.runInstantRace();

    // Award points and track stats
    this.championship.awardPoints(this.simulator.participants);
    this.trackGPStats();

    // Render updated standings in live panel
    this.renderStoryStandings();

    // Narrate results
    const winner = this.simulator.participants.find(p => p.status === 'active');
    if (winner) this.addTickerLine(`🏆 Ganador: ${winner.driver.name}`, winner.isUserDriver ? 'highlight' : '');
    await this.delay(400);

    [this.userTeam.Driver1, this.userTeam.Driver2].forEach(ud => {
      const p = this.simulator.participants.find(pp => pp.driver.baseId === ud.baseId);
      if (!p) return;
      const pos = this.simulator.participants.indexOf(p) + 1;
      if (p.status === 'dsq') this.addTickerLine(`❌ ${ud.name}: DESCALIFICADO`, 'warning');
      else if (p.status === 'dnf') this.addTickerLine(`⚠️ ${ud.name}: RETIRADO`, 'warning');
      else if (pos <= 3) this.addTickerLine(`🎉 ${ud.name}: P${pos} ¡PODIO!`, 'highlight');
      else this.addTickerLine(`📊 ${ud.name}: P${pos}`);
    });

    await this.delay(800);

    document.getElementById('story-subtitle').innerText = 'GP finalizado';
    document.getElementById('btn-story-skip').innerText = 'VER RESULTADOS';
    document.getElementById('btn-story-skip').classList.remove('hidden');
    document.getElementById('btn-story-skip').onclick = () => {
      this.showPostRaceStandings();
    };
  }

  addTickerLine(text, cssClass = '') {
    const feed = document.getElementById('story-ticker-feed');
    const line = document.createElement('div');
    line.className = `story-ticker-line ${cssClass}`;
    line.innerHTML = text;
    feed.appendChild(line);
    if (feed.parentElement) {
      feed.parentElement.scrollTop = feed.parentElement.scrollHeight;
    }
  }

  renderStoryStandings() {
    // Drivers mini standings
    const dDiv = document.getElementById('story-drivers-standings');
    dDiv.innerHTML = '';
    this.championship.driversStandings.slice(0, 10).forEach((d, i) => {
      const isUser = d.teamName === 'Usuario F1 Team';
      dDiv.innerHTML += `<div class="standing-row ${isUser ? 'is-user' : ''}"><span>P${i + 1} ${d.name}</span><span>${d.points} pts</span></div>`;
    });

    // Constructors mini standings
    const cDiv = document.getElementById('story-constructors-standings');
    cDiv.innerHTML = '';
    this.championship.constructorsStandings.slice(0, 10).forEach((c, i) => {
      const isUser = c.teamName === 'Usuario F1 Team';
      cDiv.innerHTML += `<div class="standing-row ${isUser ? 'is-user' : ''}"><span>P${i + 1} ${c.teamName}</span><span>${c.points} pts</span></div>`;
    });
  }

  simulateQualiInstant() {
    this.simulator.initQualifying();
    this.simulator.speedMultiplier = 100;
    while (this.simulator.qualiActive) {
      this.simulator.simulateQualiStep(() => { }, () => { }, () => { });
    }
  }

  generateAutoStrategy() {
    const circuit = this.championship.getCurrentCircuit();
    const totalLaps = circuit.name === "Monza" ? 16 : (circuit.name === "Mónaco" ? 22 : 18);
    const rec = this.calculateRecommendedStrategy(circuit, totalLaps);
    const startMap = { 'Blando': 'Soft', 'Medio': 'Medium', 'Duro': 'Hard' };
    const nextMap = { 'Blando': 'Soft', 'Medio': 'Medium', 'Duro': 'Hard' };
    return {
      d1: { startTyre: startMap[rec.startTyre] || 'Medium', pitLap: rec.optimalLap, nextTyre: nextMap[rec.nextTyre] || 'Hard' },
      d2: { startTyre: startMap[rec.startTyre] || 'Medium', pitLap: Math.min(totalLaps - 2, rec.optimalLap + 2), nextTyre: nextMap[rec.nextTyre] || 'Hard' }
    };
  }

  runInstantRace() {
    while (this.simulator.raceActive) {
      this.simulator.participants.forEach(p => {
        if (p.isUserDriver && p.status === 'active') {
          if (p.tyreHealth < 25.0 && !p.pitStopScheduledThisLap && p.pitStops === 0) {
            p.pitStopScheduledThisLap = true;
            if (p.tyreCompound === 'Medium') p.nextTyreSelected = p.nextTyreSelected === 'Medium' ? 'Hard' : p.nextTyreSelected;
            else if (p.tyreCompound === 'Soft') p.nextTyreSelected = p.nextTyreSelected === 'Soft' ? 'Medium' : p.nextTyreSelected;
            else if (p.tyreCompound === 'Hard') p.nextTyreSelected = p.nextTyreSelected === 'Hard' ? 'Medium' : p.nextTyreSelected;
          }
          const needsWet = this.simulator.trackWetness >= 0.5 && p.tyreCompound !== 'Wet';
          const needsInter = this.simulator.trackWetness >= 0.2 && this.simulator.trackWetness < 0.5 && p.tyreCompound !== 'Intermediate';
          if ((needsWet || needsInter) && p.pitStops < 3) {
            p.pitStopScheduledThisLap = true;
            p.nextTyreSelected = needsWet ? 'Wet' : 'Intermediate';
          }
        }
      });
      this.simulator.simulateRaceLap(() => { }, () => { });
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ============================================================================
  // SEASON SUMMARY & SHARE
  // ============================================================================

  renderSeasonSummary() {
    [['d1', this.userTeam.Driver1], ['d2', this.userTeam.Driver2]].forEach(([key, driver]) => {
      const stats = this.seasonStats[key];
      const card = document.getElementById(`summary-${key}-card`);

      // Calculate top 3 counts for quali and race
      const qualiTop3 = this.countTop3(stats.qualiPositions);
      const raceTop3 = this.countTop3(stats.racePositions.filter(p => p !== null));
      const standing = this.championship.driversStandings.find(d => d.baseId === driver.baseId);
      const champPos = this.championship.driversStandings.indexOf(standing) + 1;

      const labels = {
        es: {
          pos: "Posición en el Mundial",
          pts: "Puntos Totales",
          wins: "Victorias",
          podiums: "Podios",
          dnfs: "Abandonos (DNF)",
          dsqs: "Descalificaciones (DSQ)",
          top3Quali: "Top 3 en Clasificación",
          top3Race: "Top 3 en Carrera",
          times: "veces"
        },
        en: {
          pos: "World Championship Position",
          pts: "Total Points",
          wins: "Wins",
          podiums: "Podiums",
          dnfs: "Retirements (DNF)",
          dsqs: "Disqualifications (DSQ)",
          top3Quali: "Top 3 in Qualifying",
          top3Race: "Top 3 in Race",
          times: "time(s)"
        }
      };
      const l = labels[this.lang];

      card.innerHTML = `
        <h3>${driver.name}</h3>
        <div class="summary-stat-row"><span class="stat-label">${l.pos}</span><span class="stat-value">P${champPos}</span></div>
        <div class="summary-stat-row"><span class="stat-label">${l.pts}</span><span class="stat-value">${standing ? standing.points : 0}</span></div>
        <div class="summary-stat-row"><span class="stat-label">${l.wins}</span><span class="stat-value">${standing ? standing.wins : 0}</span></div>
        <div class="summary-stat-row"><span class="stat-label">${l.podiums}</span><span class="stat-value">${standing ? standing.podiums : 0}</span></div>
        <div class="summary-stat-row"><span class="stat-label">${l.dnfs}</span><span class="stat-value">${stats.dnfs}</span></div>
        <div class="summary-stat-row"><span class="stat-label">${l.dsqs}</span><span class="stat-value">${stats.dsqs}</span></div>
        <h4 style="margin-top:12px;color:var(--text-secondary)">${l.top3Quali}</h4>
        <div class="summary-positions-grid">
          <div class="summary-pos-badge gold"><span class="pos-number">P1</span><span class="pos-count">${qualiTop3[1] || 0} ${l.times}</span></div>
          <div class="summary-pos-badge silver"><span class="pos-number">P2</span><span class="pos-count">${qualiTop3[2] || 0} ${l.times}</span></div>
          <div class="summary-pos-badge bronze"><span class="pos-number">P3</span><span class="pos-count">${qualiTop3[3] || 0} ${l.times}</span></div>
        </div>
        <h4 style="margin-top:12px;color:var(--text-secondary)">${l.top3Race}</h4>
        <div class="summary-positions-grid">
          <div class="summary-pos-badge gold"><span class="pos-number">P1</span><span class="pos-count">${raceTop3[1] || 0} ${l.times}</span></div>
          <div class="summary-pos-badge silver"><span class="pos-number">P2</span><span class="pos-count">${raceTop3[2] || 0} ${l.times}</span></div>
          <div class="summary-pos-badge bronze"><span class="pos-number">P3</span><span class="pos-count">${raceTop3[3] || 0} ${l.times}</span></div>
        </div>
      `;
    });

    // Constructor card
    const constStanding = this.championship.constructorsStandings.find(c => c.teamName === 'Usuario F1 Team');
    const constPos = this.championship.constructorsStandings.indexOf(constStanding) + 1;
    const constCard = document.getElementById('summary-constructor-card');

    const constLabels = this.lang === 'es'
      ? { title: "🔧 Usuario F1 Team — Constructores", pos: "Posición Final", pts: "Puntos Totales" }
      : { title: "🔧 Usuario F1 Team — Constructors", pos: "Final Position", pts: "Total Points" };

    constCard.innerHTML = `
      <h3 class="text-accent">${constLabels.title}</h3>
      <div class="summary-stat-row"><span class="stat-label">${constLabels.pos}</span><span class="stat-value">P${constPos}</span></div>
      <div class="summary-stat-row"><span class="stat-label">${constLabels.pts}</span><span class="stat-value">${constStanding ? constStanding.points : 0}</span></div>
    `;
  }

  countTop3(positions) {
    const counts = {};
    positions.forEach(p => {
      if (p >= 1 && p <= 3) counts[p] = (counts[p] || 0) + 1;
    });
    return counts;
  }

  shareOnTwitter() {
    const btn = document.getElementById('btn-share-x');
    const originalText = btn.innerHTML;

    // Show loading state
    btn.innerHTML = this.lang === 'es' ? 'GENERANDO IMAGEN...' : 'GENERATING IMAGE...';
    btn.disabled = true;

    // Use html2canvas to capture the designated area
    html2canvas(document.getElementById('summary-capture-area'), {
      backgroundColor: '#0a0a0e', // Force exact retro dark theme background
      scale: 2 // High resolution rendering
    }).then(canvas => {
      canvas.toBlob(blob => {
        const copyAndShare = () => {
          // Prepare tweet text
          const d1 = this.championship.driversStandings.find(d => d.baseId === this.userTeam.Driver1.baseId);
          const d2 = this.championship.driversStandings.find(d => d.baseId === this.userTeam.Driver2.baseId);
          const d1Pos = this.championship.driversStandings.indexOf(d1) + 1;
          const d2Pos = this.championship.driversStandings.indexOf(d2) + 1;
          const constStanding = this.championship.constructorsStandings.find(c => c.teamName === 'Usuario F1 Team');
          const constPos = this.championship.constructorsStandings.indexOf(constStanding) + 1;

          const text = this.lang === 'es'
            ? `🏎️ Mi temporada en #MotorDraft:\n🏆 ${d1.name}: P${d1Pos} (${d1.points} pts, ${d1.wins} victorias)\n🏆 ${d2.name}: P${d2Pos} (${d2.points} pts, ${d2.wins} victorias)\n🔧 Constructores: P${constPos}\n\n¡Juega tú! ${window.location.href}`
            : `🏎️ My season in #MotorDraft:\n🏆 ${d1.name}: P${d1Pos} (${d1.points} pts, ${d1.wins} wins)\n🏆 ${d2.name}: P${d2Pos} (${d2.points} pts, ${d2.wins} wins)\n🔧 Constructors: P${constPos}\n\nPlay now! ${window.location.href}`;

          // Open X Intent
          const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
          window.open(url, '_blank');

          // Reset button state
          btn.innerHTML = originalText;
          btn.disabled = false;
        };

        try {
          // Attempt to write the image blob to the user's clipboard
          navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob
            })
          ]).then(() => {
            alert(this.lang === 'es'
              ? "📸 ¡Imagen de tu resumen copiada al portapapeles!\n\nSe abrirá la ventana de X. Pulsa Pegar (Ctrl+V) directamente en el tweet para adjuntar tu imagen."
              : "📸 Summary image copied to clipboard!\n\nX window will open. Press Paste (Ctrl+V) directly in the tweet box to attach the image.");
            copyAndShare();
          }).catch(err => {
            // Fallback 1: writing to clipboard failed. Trigger browser download
            this.triggerDownloadFallback(canvas);
            copyAndShare();
          });
        } catch (err) {
          // Fallback 2: Clipboard API not fully supported. Trigger browser download
          this.triggerDownloadFallback(canvas);
          copyAndShare();
        }
      }, 'image/png');
    }).catch(err => {
      console.error("html2canvas error:", err);
      // Fallback 3: html2canvas failed. Just share text
      btn.innerHTML = originalText;
      btn.disabled = false;
      const d1 = this.championship.driversStandings.find(d => d.baseId === this.userTeam.Driver1.baseId);
      const d2 = this.championship.driversStandings.find(d => d.baseId === this.userTeam.Driver2.baseId);
      const d1Pos = this.championship.driversStandings.indexOf(d1) + 1;
      const d2Pos = this.championship.driversStandings.indexOf(d2) + 1;
      const constStanding = this.championship.constructorsStandings.find(c => c.teamName === 'Usuario F1 Team');
      const constPos = this.championship.constructorsStandings.indexOf(constStanding) + 1;
      const text = this.lang === 'es'
        ? `🏎️ Mi temporada en #MotorDraft:\n🏆 ${d1.name}: P${d1Pos} (${d1.points} pts, ${d1.wins} victorias)\n🏆 ${d2.name}: P${d2Pos} (${d2.points} pts, ${d2.wins} victorias)\n🔧 Constructores: P${constPos}\n\n¡Juega tú! ${window.location.href}`
        : `🏎️ My season in #MotorDraft:\n🏆 ${d1.name}: P${d1Pos} (${d1.points} pts, ${d1.wins} wins)\n🏆 ${d2.name}: P${d2Pos} (${d2.points} pts, ${d2.wins} wins)\n🔧 Constructors: P${constPos}\n\nPlay now! ${window.location.href}`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  triggerDownloadFallback(canvas) {
    const link = document.createElement('a');
    link.download = 'motordraft_season_summary.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    alert(this.lang === 'es'
      ? "💾 Se ha descargado la imagen de tu resumen de temporada como 'motordraft_season_summary.png'. ¡Súbela a tu tweet!"
      : "💾 Your season summary image has been downloaded as 'motordraft_season_summary.png'. Upload it to your tweet!");
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  // Start Application
  window.app = new App();
});
