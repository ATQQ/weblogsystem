<template>
  <div>
    <input
      ref="file-upload-input"
      class="file-upload-input"
      type="file"
      accept=".xlsx, .xls .csv"
      @change="handleClick"
    >
    <div
      class="drop"
      @drop="handleDrop"
      @dragover="handleDragover"
      @dragenter="handleDragover"
    >
      将文件拖拽至此处 或者
      <el-button
        style="margin-left:16px;"
        size="mini"
        type="primary"
        @click="handleChoose"
      >
        选择文件
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onSuccess: Function // eslint-disable-line
  },
  methods: {
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('只支持选择一个文件!')
        return
      }
      const rawFile = files[0]

      if (!this.isExcel(rawFile)) {
        this.$message.error(
          '仅支持.xls .xlsx .csv后缀的文件'
        )
        return false
      }
      this.sureChoose(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleChoose() {
      this.$refs['file-upload-input'].click()
    },
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0]
      if (!rawFile) return
      this.sureChoose(rawFile)
    },
    sureChoose(rawFile) {
      this.$refs['file-upload-input'].value = null
      this.onSuccess && this.onSuccess(rawFile)
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
</script>

<style scoped>
.file-upload-input {
  display: none;
  z-index: -9999;
}
.drop {
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
}
</style>
