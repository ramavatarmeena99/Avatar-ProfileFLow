export const set = (key, val) => localStorage.setItem(key, val);
export const get = (key) => localStorage.getItem(key);

export const getGameName = (game_master_id) => {
    let gameName;
    if (game_master_id === 1) {
      gameName = 'BGMI';
    }
    if (game_master_id === 2) {
      gameName = 'Clash Royale';
    }
    if (game_master_id === 3) {
      gameName = 'FREE FIRE';
    }
    if (game_master_id === 4) {
      gameName = 'COD MOBILE';
    }
    if (game_master_id === 5) {
      gameName = 'LUDO';
    }
    if (game_master_id === 6) {
      gameName = 'PUBG NEW STATE';
    }
  
    return gameName;
  };