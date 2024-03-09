export const validateUrl = url => {
  if (typeof url !== 'string') {
    throw new Error(`URL must be a valid string, received: ${typeof url}`);
  }
  if (!/^https?:\/\/\S+/.test(url)) {
    throw new Error(`URL format is invalid: ${url}`);
  }
};

export const validateQueryKey = (queryKey, queryKeyTags) => {
  if (typeof queryKey !== 'string') {
    throw new Error(
      `Query key must be a valid string, received: ${typeof queryKey}`
    );
  }
  if (!queryKeyTags.includes(queryKey) && queryKeyTags.length === 0) {
    throw new Error(
      `Query key '${queryKey}' isn't included in the predefined tags: ${queryKeyTags.join(', ')}`
    );
  }
};
