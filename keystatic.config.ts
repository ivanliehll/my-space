import { config, fields, collection } from '@keystatic/core';

export default config({
  // 設定為本地模式
  storage: {
    kind: 'github',
    repo: 'ivanliehll/my-space', // 填入你的 GitHub 使用者名稱與專案名稱
  },
  collections: {
    // 對應你的 src/content/posts 資料夾
    posts: collection({
      label: '文章管理',
      slugField: 'title',
      path: 'src/content/posts/*', // 新文章會自動長在這裡
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '文章標題' } }),
        description: fields.text({ label: '文章簡介/摘要' }),
        pubDate: fields.date({ 
          label: '發布日期', 
          defaultValue: { kind: 'today' } 
        }),
        categories: fields.array(fields.text({ label: '分類' }), {
          label: '文章分類',
          itemLabel: props => props.value,
        }),
        tags: fields.array(fields.text({ label: '標籤' }), {
          label: '文章標籤',
          itemLabel: props => props.value,
        }),
        cover: fields.text({ 
          label: '封面圖片路徑', 
          defaultValue: '/assets/desktop-banner/1.webp' 
        }),
        draft: fields.checkbox({ label: '是否為草稿', defaultValue: false }),
        content: fields.markdoc({
          label: '文章內容',
          options: {
            image: {
              directory: 'public/assets/posts',
              publicPath: '/assets/posts',
            },
          },
        }),
      },
    }),
  },
});