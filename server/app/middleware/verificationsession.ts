module.exports = () => {
    return async function verificationSession(ctx, next) {
        ctx.session
        await next();
    }
};