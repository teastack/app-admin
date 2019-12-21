module.exports = () => {
    return async function verificationSession(ctx, next) {
        console.log(ctx);
        await next();
    };
};
