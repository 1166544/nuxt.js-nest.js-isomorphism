<template>
  <div class="contact-info">
    <div class="container">
      <div class="col-md-3 footer-grid animated wow slideInLeft">
        <h3>About Us</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse.
          <span>
            Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit.
          </span>
        </p>
      </div>
      <div class="col-md-3 footer-grid animated wow slideInLeft">
        <h3>Contact Info</h3>
        <ul>
          <li>
            <i class="glyphicon glyphicon-map-marker"></i>1234k Avenue, 4th block,
            <span>New York City.</span>
          </li>
          <li>
            <i class="glyphicon glyphicon-envelope"></i>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
          <li>
            <i class="glyphicon glyphicon-earphone"></i>+1234 567 567
          </li>
        </ul>
      </div>
      <pre>{{ userAgent }}</pre>
      <br>
      <pre>Format phone number-by server side {{ formatPhoneOnServer }}</pre>
      <pre>Format phone number-by client side {{ formatPhoneOnClient }}</pre>
      <Visitors/>
    </div>
  </div>
</template>

<script>
import Visitors from '~/components/com-visitors';
import serviceApiOpen from '~/services/service-api-open';

/** 联系方式页面 */
export default {
  asyncData({ store, route, userAgent, app }) {
    return {
      // 调用插中间件返回值
      userAgent,
      // 调用插件时间函数
      formatPhoneOnServer: app.$hidePhoneKeyNumber(13800138000),
    };
  },
  methods: {
    /**
     * 获取旅游类列表数据
     */
    async getJournalism() {
      await serviceApiOpen.getJournalism();
    },
  },
  mounted() {
    // 调用插件时间函数
    this.formatPhoneOnClient = this.$hidePhoneKeyNumber(13900432150);

    // 调用获取旅游类列表数据
    this.getJournalism().then(result => {
      console.log(result);
    });
  },
  data() {
    return {
      formatPhoneOnClient: '',
    };
  },
  components: {
    Visitors,
  },
};
</script>
<style scoped lang="scss">
.contact-info {
  padding: 2em 2em;
  box-sizing: border-box;
  display: block;
  font-size: 100%;

  .container {
    color: #333;
    display: table;
    content: ' ';
    ::after {
      clear: both;
    }

    .slideInLeft {
      height: 100px;
    }

    .footer-grids {
      .col-md-3 {
        position: relative;
        min-height: 1px;

        h3 {
          position: absolute;
          bottom: 0%;
          left: 0%;
          width: 100%;
          height: 280px;
          content: ' ';
        }

        ul {
          margin: 0;
          padding: 0;
          display: block;
          list-style-type: disc;
          margin-block-start: 0em;
          margin-block-end: 0em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 0px !important;

          li {
            display: list-item;
            list-style-type: none;
            margin-bottom: 1em;
            font-size: 14px;
            color: #999;
            text-align: left;

            .glyphicon {
              position: relative;
              top: 1px;
              display: inline-block;
              font-family: 'Glyphicons Halflings';
              font-style: normal;
              font-weight: normal;
              line-height: 1;

              span {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
