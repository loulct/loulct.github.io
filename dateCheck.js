export function calculateAge() {
  var ageDifMs = Date.now() - new Date(2000, 7, 18);
  var ageDate = new Date(ageDifMs);
  return ageDate.getUTCFullYear() - 1970;
}