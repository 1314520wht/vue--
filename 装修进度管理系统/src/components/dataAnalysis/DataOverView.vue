<template>
	<div class="data-over-view">
		<el-card>
			<div id="main1"></div>
		</el-card>
		<el-card>
			<div id="main2"></div>
		</el-card>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	mounted() {
		// 基于准备好的dom，初始化echarts实例
		var myChart1 = this.$echarts.init(document.getElementById("main1"));
		// 绘制图表
		myChart1.setOption({
			title: {
				text: "九期框架班-demo1",
			},
			tooltip: {},
			xAxis: {
				data: ["哈密瓜", "西瓜", "香蕉", "苹果", "梨子", "榴莲", "青提"],
			},
			yAxis: {},
			series: [
				{
					name: "销量",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20, 40],
				},
			],
		});
		var myChart2 = this.$echarts.init(document.getElementById("main2"));
		myChart2.setOption({
      color: ["#157ef5"],
			title: {
				text: "九期框架班-demo2",
      },
      textStyle: {
        color: '#828282'
      },
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "shadow",
				},
			},
			grid: {
				left: "3%",
				right: "4%",
				bottom: "3%",
				containLabel: true,
			},
			xAxis: {
				type: "value",
        min: 0,
        max: 100,
        interval: 25,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'transparent'
          }
        }
			},
			yAxis: {
				type: "category",
        data: ["框架1班", "框架9班", "框架3班", "框架8班", "框架10班"],
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#e0e0e0'
          }
        },
        textStyle: {
          color: "#000"
        }
			},
			series: [
				{
					name: "2011年",
					type: "bar",
          data: [65, 32, 55, 66, 88],
          barWidth: '22px',
          itemStyle: {
            normal: {
              barBorderRadius: [0, 10, 10, 0]
            }
          }
				}
			],
		});
	},
};
</script>
<style lang="scss">
.data-over-view {
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
	.el-card {
		width: 50%;
		#main1,
		#main2 {
			height: 500px;
		}
	}
}
</style>