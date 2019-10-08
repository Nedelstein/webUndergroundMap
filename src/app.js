import styles from './styles/loader.scss';
// require('file-loader?name=[name].[ext]!./index.html');
// document.body.style.backgroundImage = BackgroundImg;

setTimeout(refresh, 15000);
function refresh() {
    location.reload(true);
}
