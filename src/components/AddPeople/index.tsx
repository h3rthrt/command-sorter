import React, { FC, useState } from 'react'
import { Modal, Button } from 'antd'
import AddForm from './AddForm'

const AddPeople: FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = () => {
		// setIsModalVisible(false)
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	return (
		<>
			<Button
				className="add-people-btn"
				type="primary"
				onClick={showModal}
			>
				Добавить игрока
			</Button>
			<Modal
				title="Добавление игрока"
				centered
				visible={isModalVisible}
				footer={[]}
			>
				<AddForm
					handleOk={() => handleOk()}
					handleCancel={() => handleCancel()}
				/>
			</Modal>
		</>
	)
}

export default AddPeople
