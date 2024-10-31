<template>
    <div class="card">
        <img :src="item.icon" alt="" />
        <div class="right">
            <div class="title">{{ item.title }}</div>
            <div class="line"></div>
            <div class="content">
                <div>
                    <span style="font-weight: 600;">合作产业学院名称：</span>
                    {{ item.college }}
                </div>
                <div style="margin-top: 10px;" v-if="item.subject">
                    <span style="font-weight: 600;">合作专业：</span> {{ item.subject }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Case",
    props: {
        item: {
            type: Object,
            default: () => { }
        }
    },
    setup() {
        return {};
    }
};
</script>

<style scoped lang="less">
.card {
    width: 100%;
    height: 284px;
    background: #ffffff;
    box-shadow: 0px 0px 12px 0px rgba(156, 156, 156, 0.13);
    margin: 50px auto;
    display: flex;

    img {
        width: 450px;
        min-width: 450px;
        max-width: 450px;
        height: 284px;
        object-fit: cover;
    }

    .right {
        color: #333;
        padding: 40px;

        .title {
            width: 910px;
            font-size: 25px;
            font-weight: 600;
            line-height: 28px;
            padding-bottom: 14px;
            border-bottom: 1px solid #979797;
        }

        .content {
            margin-top: 20px;
            font-size: 18px;
            line-height: 34px;
        }
    }
}
</style>
