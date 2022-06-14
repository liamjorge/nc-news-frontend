exports.formatTopic = (topic) => {
  const mappings = {
    coding: "💻 Coding",
    football: "⚽️ Football",
    cooking: "🥘 Cooking",
  };

  return mappings[topic];
};
