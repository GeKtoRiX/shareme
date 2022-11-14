// Query for getting google user's name form Sanity DB.
export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
};
