<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="not-found-container">
        <div class="not-found-content">
            <!-- 错误图标 -->
            <div class="error-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                        fill="#cbd5e1"
                    />
                    <path d="M12 7V13" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
                    <circle cx="12" cy="17" r="1" fill="#64748b" />
                </svg>
            </div>

            <!-- 错误代码 -->
            <h1 class="error-code">404</h1>

            <!-- 标题和描述 -->
            <h2 class="error-title">页面未找到</h2>
            <p class="error-description">
                您访问的页面不存在或已被移除。<br />
                请检查网址是否正确，或联系管理员。
            </p>

            <!-- 操作按钮 -->
            <div class="action-buttons">
                <button @click="goHome" class="btn btn-primary">返回首页</button>
                <button @click="goBack" class="btn btn-secondary">返回上一页</button>
            </div>
        </div>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
    router.push('/')
}

const goBack = () => {
    if (window.history.length > 1) {
        router.back()
    } else {
        router.push('/')
    }
}
</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f8fafc;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.not-found-content {
    text-align: center;
    padding: 40px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow:
        0 10px 25px -5px rgba(0, 0, 0, 0.1),
        0 8px 10px -6px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 90%;
    animation: fadeIn 0.6s ease-out;

    .error-icon {
        margin-bottom: 20px;
        svg {
            width: 80px;
            height: 80px;
        }
    }

    .error-code {
        font-size: 6rem;
        font-weight: 800;
        color: #e2e8f0;
        line-height: 1;
        margin: 0;
        letter-spacing: -4px;
        user-select: none;
    }

    .error-title {
        font-size: 1.5rem;
        color: #1e293b;
        margin: 10px 0 15px;
        font-weight: 700;
    }

    .error-description {
        color: #64748b;
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 30px;
    }

    .action-buttons {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;

        .btn {
            padding: 10px 24px;
            border-radius: 8px;
            font-size: 0.95rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
            outline: none;

            &.btn-primary {
                background-color: #3b82f6;
                color: white;
                &:hover {
                    background-color: #2563eb;
                    transform: translateY(-1px);
                }
            }

            &.btn-secondary {
                background-color: #f1f5f9;
                color: #475569;
                border: 1px solid #e2e8f0;
                &:hover {
                    background-color: #e2e8f0;
                    transform: translateY(-1px);
                }
            }
        }
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
