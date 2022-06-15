exports.timeSince = (timestamp) => {
  const seconds = (new Date() - new Date(timestamp)) / 1000;
  const days = Math.floor(seconds / 86400);

  if (days === 0) {
    return `${Math.floor(seconds / 3600)}h ago`;
  } else if (days < 30) {
    return `${Math.floor(days)}d ago`;
  } else if (days < 365) {
    return `${Math.floor(days / 30)}mo ago`;
  } else {
    return `${Math.floor(days / 365)}yr ago`;
  }
};

exports.withinLast48Hrs = (timestamp) => {
  const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
  return seconds < 172800;
};
