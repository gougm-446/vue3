<template>
  <div id="box">
    <a-upload v-model:file-list="fileList" @change="handleChange">
      <a-button> 点击上传 </a-button>
    </a-upload>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import type { UploadChangeParam, UploadProps } from "ant-design-vue";

export default defineComponent({
  setup() {
    const fileList = ref<UploadProps["fileList"]>([
      {
        uid: "1",
        name: "xxx.png",
        status: "done",
        response: "Server Error 500", // custom error message to show
        url: "http://www.baidu.com/xxx.png",
      },
      {
        uid: "2",
        name: "yyy.png",
        status: "done",
        url: "http://www.baidu.com/yyy.png",
      },
    ]);

    const handleChange = ({ file, fileList }: UploadChangeParam) => {
      console.log(file);

      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    };
    return {
      fileList,
      handleChange,
    };
  },
});
</script>
<style>
#box {
  width: 200px;
}
</style>

