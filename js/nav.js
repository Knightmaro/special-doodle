// 自动处理所有页面的导航链接，处理相对路径
document.addEventListener('DOMContentLoaded', () => {
    // 获取当前页面的文件名
    const currentPath = window.location.pathname.split('/').pop();
    
    // 获取所有链接
    document.querySelectorAll('a').forEach(link => {
        // 获取链接的文件名
        const href = link.getAttribute('href');
        
        // 如果链接匹配当前页面，添加active类
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
});