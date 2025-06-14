document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-items');

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取表单输入值
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback').value;

        // 创建新的列表项
        const feedbackItem = document.createElement('li');
        feedbackItem.textContent = `姓名: ${name}, 邮箱: ${email}, 反馈: ${feedback}`;

        // 将列表项添加到反馈列表中
        feedbackList.appendChild(feedbackItem);

        // 清空表单
        feedbackForm.reset();
    });
});
