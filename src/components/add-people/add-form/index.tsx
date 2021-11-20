import React, { FC } from 'react'
import { Form, Input, Select, InputNumber, Button } from 'antd'
import { IPeoples } from '../../../types/peoples'

interface I_AddForm {
	handleOk: (people: IPeoples) => void
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

	const onFinish = (values: IPeoples) => {
		values.id = Math.random()
		handleOk(values)
		form.resetFields()
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
				name="name"
			>
				<Input />
			</Form.Item>
			<Form.Item
				rules={[{ required: true, message: 'Выберите ампулу' }]}
				label="Ампула"
				name="ampula"
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
				name="goals"
			>
				<InputNumber type="number" className="custom-number" min={0} />
			</Form.Item>
			<Form.Item
				rules={[{ required: true, message: 'Введите кол-во матчей' }]}
				label="Кол-во матчей"
				name="matches"
			>
				<InputNumber type="number" className="custom-number" min={0} />
			</Form.Item>
			<Form.Item noStyle={true}>
				<div className="add-form__btns">
					<Button
						type="primary"
						htmlType="submit"
						className="add-form__btns--add"
					>
						Добавить
					</Button>
					<Button
						className="add-form__btns--close"
						onClick={handleCancel}
					>
						Назад
					</Button>
				</div>
			</Form.Item>
		</Form>
	)
}

export default AddForm
