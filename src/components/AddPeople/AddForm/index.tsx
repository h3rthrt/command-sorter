import React, { FC } from 'react'
import { Form, Input, Select, InputNumber, Button } from 'antd'

interface I_AddForm {
	handleOk: () => void
	handleCancel: () => void
}

const AddForm: FC<I_AddForm> = ({ handleCancel, handleOk }) => {
	const [form] = Form.useForm()
	
	// const onCheck = async () => {
	// 	try {
	// 		const values = await form.validateFields()
	// 		console.log('Success:', values)
	// 	} catch (errorInfo) {
	// 		console.log('Failed:', errorInfo)
	// 	}
	// }

	const onFinish = (values: any) => {
		console.log('Received values of form: ', values)
	}

	return (
		<Form
			form={form}
			onFinish={onFinish}
			layout={'vertical'}
			className="add-form"
		>
			<Form.Item
				rules={[{ required: true, message: 'Введите имя' }]}
				label="Имя"
			>
				<Input />
			</Form.Item>
			<Form.Item
				rules={[{ required: true, message: 'Выберите ампулу' }]}
				label="Ампула"
			>
				<Select className="add-form--select">
					<Select.Option value="нападающий">нападающий</Select.Option>
					<Select.Option value="полузащитник">
						полузащитник
					</Select.Option>
					<Select.Option value="защитник">защитник</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item
				rules={[{ required: true, message: 'Введите кол-во голов' }]}
				label="Кол-во голов"
			>
				<InputNumber className="custom-number" min={0} />
			</Form.Item>
			<Form.Item
				rules={[{ required: true, message: 'Введите кол-во матчей' }]}
				label="Кол-во матчей"
			>
				<InputNumber className="custom-number" min={0} />
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
				>
					Добавить
				</Button>
			</Form.Item>
			<Form.Item>
				<Button onClick={() => handleCancel()}>
					Назад
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddForm
