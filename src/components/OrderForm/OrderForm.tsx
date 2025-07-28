// src/components/OrderForm.tsx
interface OrderFormProps {
  onSubmit: (value: string) => void;
}


export function OrderForm({ onSubmit }: OrderFormProps) {
    const handleSubmit = (formData: FormData) => {
        const username = formData.get("username") as string;
        onSubmit( username);
    };
    
  return (
	  <form action={handleSubmit}>
      <input type="text" name="username"  defaultValue="Connor MacLeod" placeholder="Name"/>
      <button type="submit">Send</button>
    </form>
  );
}
