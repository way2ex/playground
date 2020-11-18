import ejs from 'ejs';
import download from 'download-git-repo';

download('zhuqingguang/snail-tools', './test', (error: any) => {
    console.log(error)
})
