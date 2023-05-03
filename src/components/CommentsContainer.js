import React from 'react'

const commentsData = [
	{
		name: "Esha Dhareshwar",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [
			]
	},
	{
		name: "Esha Dhareshwar",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [
				{
					name: "Esha Dhareshwar",
					text: "Lorem ipsum dolor sit amet, consectetur adip",
					replies: [
			]
	},
			]
	},
{
		name: "Esha Dhareshwar",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [
				{
					name: "Esha Dhareshwar",
					text: "Lorem ipsum dolor sit amet, consectetur adip",
					replies: [
			]
	},
			]
	},
{
		name: "Esha Dhareshwar",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [
				{
					name: "Esha Dhareshwar",
					text: "Lorem ipsum dolor sit amet, consectetur adip",
					replies: [
			]
	},
			]
	},
];

const Comment = ({data}) => {
	const {name, text, replies} = data;

	return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg m-2'>
		<img className='w-8 h-8' alt='user' src="data:image/png;base64,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"/>
		<div className='px-3'>
			<p className='font-bold'>{name}</p>
			<p>{text}</p>
		</div>
</div>
}

const CommentsList = ({comments}) => {
	return comments.map((comment, index) => (

	<div key={index}>	
	<Comment  data={comment} />
	<div className='pl-5 border-l-black ml-5'>
		<CommentsList comments={comment.replies}/>
	</div>
	</div>
)
	)
};

export const CommentsContainer = () => {
	return (
		<div className='m-5 p-2'>
			<h1 className='text-2xl font-bold'>Comments: </h1>
			<CommentsList comments={commentsData}/>
		</div>
	);
};

// export default CommentsContainer;
