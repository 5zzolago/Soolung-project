export function validateUsername(username) {
  if (username.trim() === "") return false;
  const isVaild = username.match(/^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,9}$/);
  if (!isVaild) return false;
  return true;
}

export function validateComment(comment) {
  if (comment.trim() === "") return false;
  if (comment.trim().length > 50) return false;
  return true;
}

export function validatePassword(password) {
  if (password.trim() === "") return false;
  return true;
}
