import React, { FC, useState } from 'react'
import { Modal, Button } from 'antd'
import AddForm from './add-form'
import { IPeoples } from '../../types/peoples'

interface I_AddPeople {
	addToData: (peoples: IPeoples) => void
}

const AddPeople: FC<I_AddPeople> = ({addToData}) => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = (people: IPeoples) => {
		addToData(people)
		setIsModalVisible(false)
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
				onCancel={handleCancel}
			>
				<AddForm
					handleOk={(people: IPeoples) => handleOk(people)}
					handleCancel={() => handleCancel()}
				/>
			</Modal>
		</>
	)
}

export default AddPeople
