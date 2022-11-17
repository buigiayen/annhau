import RouterConfig from '../../Router/RouterConfig'

const RouterLink = () => {
    let Config = RouterConfig().filter(p => p.isShow);
    const ObjectRouter = [];
    Config.map((index) => {
        return ObjectRouter.push(index);
    })
    return ObjectRouter;
}
export default RouterLink;