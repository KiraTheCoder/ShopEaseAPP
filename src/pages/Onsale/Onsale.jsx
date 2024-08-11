import axios from 'axios';
import { Formik, Form } from 'formik';
import { TextInput, Textarea, Button } from '@/components/form';
import { productUpload } from "@/services/lib/YupFormikValidator";

function Onsale() {

    async function uploadedForm(values, actions) {
        // console.log("Form values:", values);

        // Create FormData object
        let formData = new FormData();
        formData.append('productName', values.productName);
        formData.append('description', values.description);
        formData.append('price', values.price);
        formData.append('stock', values.stock);
        formData.append('category', values.category);
        if (values.image) {
            formData.append('image', values.image);
        }

        try {
            const response = await axios.post('http://localhost:8080/product/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Product created:', response.data);
        } catch (error) {
            console.error('Error creating product:', error);
        }
        // actions.resetForm("");
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-8 border rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Upload Product For Sale</h1>
            <Formik
                initialValues={{ ...productUpload.initialValues }}
                validationSchema={productUpload.validationSchema}
                onSubmit={uploadedForm}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter Product details below</p>
                        <TextInput name="productName" type="input" />
                        <Textarea name="description"  rows={4} className="w-full p-2 border rounded-lg" />
                        <TextInput name="price" type="input" />
                        <TextInput name="stock" type="input" />
                        <TextInput name="category" type="input" />
                        <input
                            name="image"
                            type="file"
                            onChange={(event) => {
                                setFieldValue("image", event.currentTarget.files[0]);
                            }}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <Button type="submit" name="upload" className="w-full bg-[#db4444] text-white p-2 rounded-lg hover:bg-blue-700" />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Onsale;
