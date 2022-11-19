import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  Tooltip,
  Typography,
} from 'antd'

import { LinkOutlined, KeyOutlined } from '@ant-design/icons'
import Link from 'next/link'
import homeStyles from '../styles/Home.module.css'

const { Content, Header } = Layout
const { Title, Text } = Typography

function Home() {
  return (
    <Layout className={homeStyles.layout}>
      <Content className={homeStyles.content}>
        <header>
          <Title level={1}>Snotion</Title>
          <Text type="secondary">
            Manage all your notion integrations and widgets.
          </Text>
        </header>
        <Divider />
        <section>
          <Title level={3}>Integrations</Title>
          <Text type="secondary">
            Connect your notion account to your favorite apps. Please complete
            the <Link href="/help">setup</Link> first.
          </Text>
          <Form
            name="basic"
            requiredMark={false}
            className={homeStyles.form}
            layout="vertical"
          >
            <Form.Item label="Notion Database Link" required>
              <Input prefix={<LinkOutlined />} />
              <Tooltip title="How to find the database link">
                <Link href="/help#notion-database">
                  How to find the database link
                </Link>
              </Tooltip>
            </Form.Item>

            <Form.Item label="Notion Integration Token" required>
              <Input.Password prefix={<KeyOutlined />} />
              <Tooltip title="How to create a notion integration">
                <Link href="/help#integration-token">
                  How to create a notion integration
                </Link>
              </Tooltip>
            </Form.Item>

            <Form.Item label="SDUI Bear Token" required>
              <Input.Password prefix={<KeyOutlined />} />
              <Tooltip title="How to get the sdui bear token">
                <Link href="/help#bear-token">
                  How to get the sdui bear token
                </Link>
              </Tooltip>
            </Form.Item>

            <Form.Item>
              <Row justify="end">
                <Button type="primary" htmlType="submit">
                  Save changes
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </section>
        <Divider />
        <section>
          <Title level={3}>Widgets</Title>
          <Text type="secondary">
            Add widgets to your notion pages to display custom data.
          </Text>
          <Row gutter={24} style={{ marginTop: '20px' }}>
            <Col span={12}>
              <Card
                title="Break Countdown"
                extra={<Button type="link">Copy link</Button>}
                size="small"
                bordered={false}
              >
                <Text type="secondary">
                  Displays the time remaining until the break.
                </Text>
              </Card>
            </Col>

            <Col span={12}>
              <Card
                title="Exam Countdown"
                extra={<Button type="link">Copy link</Button>}
                size="small"
                bordered={false}
              >
                <Text type="secondary">
                  Displays the time remaining until the next exam.
                </Text>
              </Card>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  )
}

export default Home
