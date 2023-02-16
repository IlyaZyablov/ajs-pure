export default function getHealth(data) {
  let health = '';
  if (data.health > 50) {
    health = 'healthy';
  } else if (data.health <= 50 && data.health >= 15) {
    health = 'wounded';
  } else {
    health = 'critical';
  }
  return health;
}
